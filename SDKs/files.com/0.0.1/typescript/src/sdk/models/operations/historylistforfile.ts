import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class HistoryListForFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class HistoryListForFileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=display" })
  display?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_at" })
  endAt?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_at" })
  startAt?: Date;
}


export class HistoryListForFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: HistoryListForFilePathParams;

  @SpeakeasyMetadata()
  queryParams: HistoryListForFileQueryParams;
}


export class HistoryListForFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ActionEntity })
  actionEntities?: shared.ActionEntity[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
