import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAdsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class GetAdsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=listing_ids" })
  listingIds?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetAdsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetAdsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAdsPathParams;

  @Metadata()
  queryParams: GetAdsQueryParams;

  @Metadata()
  security: GetAdsSecurity;
}


export class GetAdsResponse extends SpeakeasyBase {
  @Metadata()
  adPagedCollection?: shared.AdPagedCollection;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
