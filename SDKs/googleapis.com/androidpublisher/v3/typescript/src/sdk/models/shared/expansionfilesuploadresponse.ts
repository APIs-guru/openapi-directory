import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExpansionFile } from "./expansionfile";



// ExpansionFilesUploadResponse
/** 
 * Response for uploading an expansion file.
**/
export class ExpansionFilesUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expansionFile" })
  expansionFile?: ExpansionFile;
}
