import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaginationLink } from "./paginationlink";



export class Pagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentPage" })
  currentPage?: number;

  @SpeakeasyMetadata({ data: "json, name=currentPageItems" })
  currentPageItems?: number;

  @SpeakeasyMetadata({ data: "json, name=itemsTotal" })
  itemsTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=links", elemType: PaginationLink })
  links: PaginationLink[];

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pagesTotal" })
  pagesTotal?: number;
}
