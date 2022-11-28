import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HistoricalDownload } from "./historicaldownload";



export class GetDownloadsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloads", elemType: HistoricalDownload })
  downloads?: HistoricalDownload[];

  @SpeakeasyMetadata({ data: "json, name=result_count" })
  resultCount?: number;
}
