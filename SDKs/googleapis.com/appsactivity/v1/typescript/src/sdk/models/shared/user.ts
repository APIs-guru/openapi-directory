import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Photo } from "./photo";


// User
/** 
 * A representation of a user.
**/
export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;

  @Metadata({ data: "json, name=isMe" })
  isMe?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=permissionId" })
  permissionId?: string;

  @Metadata({ data: "json, name=photo" })
  photo?: Photo;
}
