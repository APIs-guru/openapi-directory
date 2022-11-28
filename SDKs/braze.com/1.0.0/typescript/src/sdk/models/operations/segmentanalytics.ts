import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SegmentAnalyticsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segment_id" })
  segmentId?: string;
}


export class SegmentAnalyticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SegmentAnalyticsQueryParams;
}


export class SegmentAnalyticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
