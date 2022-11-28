import { SpeakeasyBase } from "../../../internal/utils";
import { UploadToken } from "./uploadtoken";
import { Pagination } from "./pagination";
export declare class TokenListResponse extends SpeakeasyBase {
    data: UploadToken[];
    pagination: Pagination;
}
