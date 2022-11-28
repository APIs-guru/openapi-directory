import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductViewSortByEnum } from "./productviewsortbyenum";
import { SortOrderEnum } from "./sortorderenum";



export class SearchProductsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: ProductViewSortByEnum;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
