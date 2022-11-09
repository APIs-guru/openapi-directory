import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CampaignAnalyticsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=campaign_id" })
  campaignId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;
}


export class CampaignAnalyticsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CampaignAnalyticsQueryParams;
}


export class CampaignAnalyticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
