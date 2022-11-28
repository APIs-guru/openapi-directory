import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerSessionEvent } from "./playersessionevent";
import { Pagination } from "./pagination";
export declare class RawStatisticsListPlayerSessionEventsResponse extends SpeakeasyBase {
    data?: PlayerSessionEvent[];
    pagination?: Pagination;
}
