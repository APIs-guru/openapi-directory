import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaginationLink } from "./paginationlink";


export class Pagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentPage" })
  currentPage?: number;

  @Metadata({ data: "json, name=currentPageItems" })
  currentPageItems?: number;

  @Metadata({ data: "json, name=itemsTotal" })
  itemsTotal?: number;

  @Metadata({ data: "json, name=links", elemType: shared.PaginationLink })
  links: PaginationLink[];

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pagesTotal" })
  pagesTotal?: number;
}
