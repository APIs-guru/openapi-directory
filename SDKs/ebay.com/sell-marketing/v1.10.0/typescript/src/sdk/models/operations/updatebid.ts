import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateBidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ad_id" })
  adId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class UpdateBidSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UpdateBidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateBidPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateBidPercentageRequest;

  @Metadata()
  security: UpdateBidSecurity;
}


export class UpdateBidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
