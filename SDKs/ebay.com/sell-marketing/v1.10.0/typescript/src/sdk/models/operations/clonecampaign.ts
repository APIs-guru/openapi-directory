import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloneCampaignPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class CloneCampaignSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CloneCampaignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloneCampaignPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CloneCampaignRequest;

  @SpeakeasyMetadata()
  security: CloneCampaignSecurity;
}


export class CloneCampaignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cloneCampaign201ApplicationJsonObject?: Map<string, any>;
}
