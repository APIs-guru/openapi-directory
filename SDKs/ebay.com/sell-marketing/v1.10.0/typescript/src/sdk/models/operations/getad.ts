import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ad_id" })
  adId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class GetAdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetAdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAdPathParams;

  @Metadata()
  security: GetAdSecurity;
}


export class GetAdResponse extends SpeakeasyBase {
  @Metadata()
  ad?: shared.Ad;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
