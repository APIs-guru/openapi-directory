import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomEventsAnalyticsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=app_id" })
  appId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=event" })
  event?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=segment_id" })
  segmentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unit" })
  unit?: string;
}


export class CustomEventsAnalyticsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CustomEventsAnalyticsQueryParams;
}


export class CustomEventsAnalyticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
