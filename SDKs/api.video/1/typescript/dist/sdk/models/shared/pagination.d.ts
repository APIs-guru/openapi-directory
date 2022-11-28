import { SpeakeasyBase } from "../../../internal/utils";
import { PaginationLink } from "./paginationlink";
export declare class Pagination extends SpeakeasyBase {
    currentPage?: number;
    currentPageItems?: number;
    itemsTotal?: number;
    links: PaginationLink[];
    pageSize?: number;
    pagesTotal?: number;
}
