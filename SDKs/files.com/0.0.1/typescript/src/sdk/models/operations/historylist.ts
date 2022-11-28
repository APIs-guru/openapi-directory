import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class HistoryListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=display" })
  display?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_at" })
  endAt?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_gt" })
  filterGt?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_gteq" })
  filterGteq?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_like" })
  filterLike?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_lt" })
  filterLt?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_lteq" })
  filterLteq?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_at" })
  startAt?: Date;
}


export class HistoryListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: HistoryListQueryParams;
}


export class HistoryListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ActionEntity })
  actionEntities?: shared.ActionEntity[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
