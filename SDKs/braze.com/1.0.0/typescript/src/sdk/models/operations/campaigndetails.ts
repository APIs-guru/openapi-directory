import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CampaignDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=campaign_id" })
  campaignId?: string;
}


export class CampaignDetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CampaignDetailsQueryParams;
}


export class CampaignDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
