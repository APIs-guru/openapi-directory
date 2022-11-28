import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileKey } from "./filekey";



// UserFileKeySetRequest
/** 
 * Request model for setting a user file key
**/
export class UserFileKeySetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileId" })
  fileId: number;

  @SpeakeasyMetadata({ data: "json, name=fileKey" })
  fileKey: FileKey;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: number;
}
