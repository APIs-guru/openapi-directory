import { SpeakeasyBase } from "../../../internal/utils";
import { Chapter } from "./chapter";
import { Pagination } from "./pagination";
export declare class ChaptersListResponse extends SpeakeasyBase {
    data?: Chapter[];
    pagination?: Pagination;
}
