import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExpansionFile } from "./expansionfile";



export class ExpansionFilesUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  expansionFile?: ExpansionFile;
}
