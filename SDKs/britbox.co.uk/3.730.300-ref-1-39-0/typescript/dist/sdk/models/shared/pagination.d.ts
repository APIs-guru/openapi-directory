import { SpeakeasyBase } from "../../../internal/utils";
import { PaginationAuth } from "./paginationauth";
import { PaginationOptions } from "./paginationoptions";
export declare class Pagination extends SpeakeasyBase {
    authorization?: PaginationAuth;
    next?: string;
    options?: PaginationOptions;
    page: number;
    previous?: string;
    size?: number;
    total: number;
}
