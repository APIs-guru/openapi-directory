import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAdsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class GetAdsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=listing_ids" })
  listingIds?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetAdsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetAdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAdsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAdsQueryParams;

  @SpeakeasyMetadata()
  security: GetAdsSecurity;
}


export class GetAdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  adPagedCollection?: shared.AdPagedCollection;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
