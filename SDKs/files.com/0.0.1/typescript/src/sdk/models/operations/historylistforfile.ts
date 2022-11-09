import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class HistoryListForFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class HistoryListForFileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=display" })
  display?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_at" })
  endAt?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_at" })
  startAt?: Date;
}


export class HistoryListForFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: HistoryListForFilePathParams;

  @Metadata()
  queryParams: HistoryListForFileQueryParams;
}


export class HistoryListForFileResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ActionEntity })
  actionEntities?: shared.ActionEntity[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
