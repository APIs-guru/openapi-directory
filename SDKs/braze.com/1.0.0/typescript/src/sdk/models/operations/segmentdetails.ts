import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SegmentDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=segment_id" })
  segmentId?: string;
}


export class SegmentDetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SegmentDetailsQueryParams;
}


export class SegmentDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
