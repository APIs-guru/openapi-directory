import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCampaignByNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=campaign_name" })
  campaignName: string;
}


export class GetCampaignByNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetCampaignByNameRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCampaignByNameQueryParams;

  @Metadata()
  security: GetCampaignByNameSecurity;
}


export class GetCampaignByNameResponse extends SpeakeasyBase {
  @Metadata()
  campaign?: shared.Campaign;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
