import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Collaborator } from "./collaborator";
import { CommentPermissions } from "./commentpermissions";



export class Comment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: Collaborator;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: CommentPermissions;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
