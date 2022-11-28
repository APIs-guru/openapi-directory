import { SpeakeasyBase } from "../../../internal/utils";
import { LiveStream } from "./livestream";
import { Pagination } from "./pagination";
export declare class LiveStreamListResponse extends SpeakeasyBase {
    data: LiveStream[];
    pagination: Pagination;
}
