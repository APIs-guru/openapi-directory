import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CampaignAnalyticsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaign_id" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;
}


export class CampaignAnalyticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CampaignAnalyticsQueryParams;
}


export class CampaignAnalyticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
