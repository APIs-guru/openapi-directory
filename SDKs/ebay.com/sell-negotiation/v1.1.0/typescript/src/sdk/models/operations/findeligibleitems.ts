import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindEligibleItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class FindEligibleItemsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class FindEligibleItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class FindEligibleItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: FindEligibleItemsQueryParams;

  @SpeakeasyMetadata()
  headers: FindEligibleItemsHeaders;

  @SpeakeasyMetadata()
  security: FindEligibleItemsSecurity;
}


export class FindEligibleItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pagedEligibleItemCollection?: shared.PagedEligibleItemCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
