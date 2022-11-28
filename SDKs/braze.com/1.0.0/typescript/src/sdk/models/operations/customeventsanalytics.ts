import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomEventsAnalyticsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_id" })
  appId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event" })
  event?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segment_id" })
  segmentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unit" })
  unit?: string;
}


export class CustomEventsAnalyticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CustomEventsAnalyticsQueryParams;
}


export class CustomEventsAnalyticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
