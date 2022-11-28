import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessLevelFilter } from "./accesslevelfilter";
import { SortOrderEnum } from "./sortorderenum";



export class SearchProvisionedProductsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=AccessLevelFilter" })
  accessLevelFilter?: AccessLevelFilter;

  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
