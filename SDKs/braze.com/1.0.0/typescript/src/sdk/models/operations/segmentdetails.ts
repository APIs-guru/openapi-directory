import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SegmentDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segment_id" })
  segmentId?: string;
}


export class SegmentDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SegmentDetailsQueryParams;
}


export class SegmentDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
