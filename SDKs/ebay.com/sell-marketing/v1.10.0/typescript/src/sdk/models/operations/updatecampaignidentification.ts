import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateCampaignIdentificationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class UpdateCampaignIdentificationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UpdateCampaignIdentificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateCampaignIdentificationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateCampaignIdentificationRequest;

  @SpeakeasyMetadata()
  security: UpdateCampaignIdentificationSecurity;
}


export class UpdateCampaignIdentificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
