import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndCampaignPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class EndCampaignSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class EndCampaignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EndCampaignPathParams;

  @SpeakeasyMetadata()
  security: EndCampaignSecurity;
}


export class EndCampaignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
