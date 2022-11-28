import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindListingRecommendationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class FindListingRecommendationsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class FindListingRecommendationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class FindListingRecommendationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: FindListingRecommendationsQueryParams;

  @SpeakeasyMetadata()
  headers: FindListingRecommendationsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.FindListingRecommendationRequest;

  @SpeakeasyMetadata()
  security: FindListingRecommendationsSecurity;
}


export class FindListingRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pagedListingRecommendationCollection?: shared.PagedListingRecommendationCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
