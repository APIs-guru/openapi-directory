import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SegmentListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: string;
}


export class SegmentListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SegmentListQueryParams;
}


export class SegmentListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
