import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SegmentListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: string;
}


export class SegmentListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SegmentListQueryParams;
}


export class SegmentListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
