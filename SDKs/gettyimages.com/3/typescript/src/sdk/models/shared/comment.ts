import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Collaborator } from "./collaborator";
import { CommentPermissions } from "./commentpermissions";


export class Comment extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_by" })
  createdBy?: Collaborator;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: CommentPermissions;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
