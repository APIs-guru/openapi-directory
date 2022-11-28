import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserTaskListResponseOwner
/** 
 * The owner of the user task list, i.e. the person whose My Tasks is represented by this resource.
**/
export class UserTaskListResponseOwner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


// UserTaskListResponseWorkspace
/** 
 * The workspace in which the user task list is located.
**/
export class UserTaskListResponseWorkspace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


export class UserTaskListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: UserTaskListResponseOwner;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace" })
  workspace?: UserTaskListResponseWorkspace;
}
