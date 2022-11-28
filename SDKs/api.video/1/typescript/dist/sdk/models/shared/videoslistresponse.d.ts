import { SpeakeasyBase } from "../../../internal/utils";
import { Video } from "./video";
import { Pagination } from "./pagination";
export declare class VideosListResponse extends SpeakeasyBase {
    data: Video[];
    pagination: Pagination;
}
