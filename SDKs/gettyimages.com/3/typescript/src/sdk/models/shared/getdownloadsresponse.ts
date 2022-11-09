import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HistoricalDownload } from "./historicaldownload";


export class GetDownloadsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloads", elemType: shared.HistoricalDownload })
  downloads?: HistoricalDownload[];

  @Metadata({ data: "json, name=result_count" })
  resultCount?: number;
}
