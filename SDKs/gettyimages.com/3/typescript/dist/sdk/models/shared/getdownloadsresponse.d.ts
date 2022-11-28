import { SpeakeasyBase } from "../../../internal/utils";
import { HistoricalDownload } from "./historicaldownload";
export declare class GetDownloadsResponse extends SpeakeasyBase {
    downloads?: HistoricalDownload[];
    resultCount?: number;
}
