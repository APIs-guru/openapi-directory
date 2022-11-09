import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CanvasListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_archived" })
  includeArchived?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=last_edit.time[gt]" })
  lastEditTimeGt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: string;
}


export class CanvasListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CanvasListQueryParams;
}


export class CanvasListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
