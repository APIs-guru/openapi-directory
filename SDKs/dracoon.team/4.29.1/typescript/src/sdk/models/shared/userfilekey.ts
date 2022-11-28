import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileKey } from "./filekey";



// UserFileKey
/** 
 * User file key
**/
export class UserFileKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileKey" })
  fileKey: FileKey;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: number;
}
