import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectCompact } from "./projectcompact";
import { UserCompact } from "./usercompact";

export enum ProjectMembershipResponseWriteAccessEnum {
    FullWrite = "full_write"
,    CommentOnly = "comment_only"
}


export class ProjectMembershipResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=project" })
  project?: ProjectCompact;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=user" })
  user?: UserCompact;

  @Metadata({ data: "json, name=write_access" })
  writeAccess?: ProjectMembershipResponseWriteAccessEnum;
}
