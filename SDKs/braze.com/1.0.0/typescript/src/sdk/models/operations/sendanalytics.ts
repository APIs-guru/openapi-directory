import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendAnalyticsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaign_id" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=send_id" })
  sendId?: string;
}


export class SendAnalyticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SendAnalyticsQueryParams;
}


export class SendAnalyticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
