import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCampaignByNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaign_name" })
  campaignName: string;
}


export class GetCampaignByNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetCampaignByNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCampaignByNameQueryParams;

  @SpeakeasyMetadata()
  security: GetCampaignByNameSecurity;
}


export class GetCampaignByNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  campaign?: shared.Campaign;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
