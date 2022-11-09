import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeobfuscationFile } from "./deobfuscationfile";


// DeobfuscationFilesUploadResponse
/** 
 * Responses for the upload.
**/
export class DeobfuscationFilesUploadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deobfuscationFile" })
  deobfuscationFile?: DeobfuscationFile;
}
