import { SpeakeasyBase } from "../../../internal/utils";
import { VideoSession } from "./videosession";
import { Pagination } from "./pagination";
export declare class RawStatisticsListSessionsResponse extends SpeakeasyBase {
    data?: VideoSession[];
    pagination?: Pagination;
}
