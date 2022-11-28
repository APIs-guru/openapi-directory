import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ad_id" })
  adId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class GetAdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetAdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAdPathParams;

  @SpeakeasyMetadata()
  security: GetAdSecurity;
}


export class GetAdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ad?: shared.Ad;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
