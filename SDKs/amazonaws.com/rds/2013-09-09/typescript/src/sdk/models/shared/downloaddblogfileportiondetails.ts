import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DownloadDbLogFilePortionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  additionalDataPending?: boolean;

  @SpeakeasyMetadata()
  logFileData?: string;

  @SpeakeasyMetadata()
  marker?: string;
}
