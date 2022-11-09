import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileKey } from "./filekey";


// UserFileKeySetRequest
/** 
 * Request model for setting a user file key
**/
export class UserFileKeySetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileId" })
  fileId: number;

  @Metadata({ data: "json, name=fileKey" })
  fileKey: FileKey;

  @Metadata({ data: "json, name=userId" })
  userId: number;
}
