import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FindListingRecommendationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class FindListingRecommendationsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" })
  xEbayCMarketplaceId: string;
}


export class FindListingRecommendationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class FindListingRecommendationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: FindListingRecommendationsQueryParams;

  @Metadata()
  headers: FindListingRecommendationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.FindListingRecommendationRequest;

  @Metadata()
  security: FindListingRecommendationsSecurity;
}


export class FindListingRecommendationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pagedListingRecommendationCollection?: shared.PagedListingRecommendationCollection;

  @Metadata()
  statusCode: number;
}
