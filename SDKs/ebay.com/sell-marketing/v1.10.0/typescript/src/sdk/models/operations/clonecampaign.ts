import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloneCampaignPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class CloneCampaignSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CloneCampaignRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloneCampaignPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CloneCampaignRequest;

  @Metadata()
  security: CloneCampaignSecurity;
}


export class CloneCampaignResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  cloneCampaign201ApplicationJsonObject?: Map<string, any>;
}
