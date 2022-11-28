import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeobfuscationFile } from "./deobfuscationfile";



// DeobfuscationFilesUploadResponse
/** 
 * Responses for the upload.
**/
export class DeobfuscationFilesUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deobfuscationFile" })
  deobfuscationFile?: DeobfuscationFile;
}
