import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Photo } from "./photo";



// User
/** 
 * A representation of a user.
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isMe" })
  isMe?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=permissionId" })
  permissionId?: string;

  @SpeakeasyMetadata({ data: "json, name=photo" })
  photo?: Photo;
}
