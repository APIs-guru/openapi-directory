import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CanvasListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_archived" })
  includeArchived?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_edit.time[gt]" })
  lastEditTimeGt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: string;
}


export class CanvasListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CanvasListQueryParams;
}


export class CanvasListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
