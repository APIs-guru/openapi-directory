import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductSourceEnum } from "./productsourceenum";
import { ProductViewSortByEnum } from "./productviewsortbyenum";
import { SortOrderEnum } from "./sortorderenum";


export class SearchProductsAsAdminInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=Filters" })
  filters?: Map<string, string[]>;

  @Metadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=PortfolioId" })
  portfolioId?: string;

  @Metadata({ data: "json, name=ProductSource" })
  productSource?: ProductSourceEnum;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: ProductViewSortByEnum;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
