import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SegmentAnalyticsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ending_at" })
  endingAt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=length" })
  length?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=segment_id" })
  segmentId?: string;
}


export class SegmentAnalyticsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SegmentAnalyticsQueryParams;
}


export class SegmentAnalyticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
