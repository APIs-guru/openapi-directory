import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCampaignPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class GetCampaignSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetCampaignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCampaignPathParams;

  @SpeakeasyMetadata()
  security: GetCampaignSecurity;
}


export class GetCampaignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  campaign?: shared.Campaign;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
