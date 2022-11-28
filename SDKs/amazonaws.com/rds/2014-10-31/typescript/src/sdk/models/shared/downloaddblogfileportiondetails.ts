import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DownloadDbLogFilePortionDetails
/** 
 * This data type is used as a response element to <code>DownloadDBLogFilePortion</code>.
**/
export class DownloadDbLogFilePortionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  additionalDataPending?: boolean;

  @SpeakeasyMetadata()
  logFileData?: string;

  @SpeakeasyMetadata()
  marker?: string;
}
