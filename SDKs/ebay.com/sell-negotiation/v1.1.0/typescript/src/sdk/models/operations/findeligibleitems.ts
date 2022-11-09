import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FindEligibleItemsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class FindEligibleItemsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class FindEligibleItemsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class FindEligibleItemsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: FindEligibleItemsQueryParams;

  @Metadata()
  headers: FindEligibleItemsHeaders;

  @Metadata()
  security: FindEligibleItemsSecurity;
}


export class FindEligibleItemsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pagedEligibleItemCollection?: shared.PagedEligibleItemCollection;

  @Metadata()
  statusCode: number;
}
