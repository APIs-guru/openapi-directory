import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCampaignPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class GetCampaignSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetCampaignRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCampaignPathParams;

  @Metadata()
  security: GetCampaignSecurity;
}


export class GetCampaignResponse extends SpeakeasyBase {
  @Metadata()
  campaign?: shared.Campaign;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
