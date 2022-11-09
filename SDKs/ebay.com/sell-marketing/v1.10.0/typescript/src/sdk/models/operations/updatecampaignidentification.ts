import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateCampaignIdentificationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class UpdateCampaignIdentificationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UpdateCampaignIdentificationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateCampaignIdentificationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateCampaignIdentificationRequest;

  @Metadata()
  security: UpdateCampaignIdentificationSecurity;
}


export class UpdateCampaignIdentificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
