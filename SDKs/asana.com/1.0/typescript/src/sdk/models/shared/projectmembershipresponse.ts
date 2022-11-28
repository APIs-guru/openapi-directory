import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectCompact } from "./projectcompact";
import { UserCompact } from "./usercompact";


export enum ProjectMembershipResponseWriteAccessEnum {
    FullWrite = "full_write",
    CommentOnly = "comment_only"
}


export class ProjectMembershipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: ProjectCompact;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: UserCompact;

  @SpeakeasyMetadata({ data: "json, name=write_access" })
  writeAccess?: ProjectMembershipResponseWriteAccessEnum;
}
