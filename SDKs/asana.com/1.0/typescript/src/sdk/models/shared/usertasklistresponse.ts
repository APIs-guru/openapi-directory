import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserTaskListResponseOwner
/** 
 * The owner of the user task list, i.e. the person whose My Tasks is represented by this resource.
**/
export class UserTaskListResponseOwner extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


// UserTaskListResponseWorkspace
/** 
 * The workspace in which the user task list is located.
**/
export class UserTaskListResponseWorkspace extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class UserTaskListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: UserTaskListResponseOwner;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=workspace" })
  workspace?: UserTaskListResponseWorkspace;
}
