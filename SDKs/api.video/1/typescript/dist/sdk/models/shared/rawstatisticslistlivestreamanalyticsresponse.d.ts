import { SpeakeasyBase } from "../../../internal/utils";
import { LiveStreamSession } from "./livestreamsession";
import { Pagination } from "./pagination";
export declare class RawStatisticsListLiveStreamAnalyticsResponse extends SpeakeasyBase {
    data?: LiveStreamSession[];
    pagination?: Pagination;
}
