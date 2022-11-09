import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileKey } from "./filekey";


// UserFileKey
/** 
 * User file key
**/
export class UserFileKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileKey" })
  fileKey: FileKey;

  @Metadata({ data: "json, name=userId" })
  userId: number;
}
