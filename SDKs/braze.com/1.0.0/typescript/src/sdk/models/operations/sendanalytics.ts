import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SendAnalyticsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=campaign_id" })
  campaignId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=send_id" })
  sendId?: string;
}


export class SendAnalyticsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SendAnalyticsQueryParams;
}


export class SendAnalyticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
