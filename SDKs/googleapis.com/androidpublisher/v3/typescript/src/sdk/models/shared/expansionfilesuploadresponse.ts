import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExpansionFile } from "./expansionfile";


// ExpansionFilesUploadResponse
/** 
 * Response for uploading an expansion file.
**/
export class ExpansionFilesUploadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=expansionFile" })
  expansionFile?: ExpansionFile;
}
