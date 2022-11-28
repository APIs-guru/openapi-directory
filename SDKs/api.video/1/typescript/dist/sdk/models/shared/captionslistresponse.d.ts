import { SpeakeasyBase } from "../../../internal/utils";
import { Subtitle } from "./subtitle";
import { Pagination } from "./pagination";
export declare class CaptionsListResponse extends SpeakeasyBase {
    data?: Subtitle[];
    pagination?: Pagination;
}
