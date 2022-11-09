import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessLevelFilter } from "./accesslevelfilter";
import { SortOrderEnum } from "./sortorderenum";


export class SearchProvisionedProductsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=AccessLevelFilter" })
  accessLevelFilter?: AccessLevelFilter;

  @Metadata({ data: "json, name=Filters" })
  filters?: Map<string, string[]>;

  @Metadata({ data: "json, name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=PageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: string;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;
}
