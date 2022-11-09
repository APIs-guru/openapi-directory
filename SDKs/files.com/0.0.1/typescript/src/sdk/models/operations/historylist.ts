import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class HistoryListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=display" })
  display?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_at" })
  endAt?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_gt" })
  filterGt?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_gteq" })
  filterGteq?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_like" })
  filterLike?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_lt" })
  filterLt?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter_lteq" })
  filterLteq?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_at" })
  startAt?: Date;
}


export class HistoryListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: HistoryListQueryParams;
}


export class HistoryListResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ActionEntity })
  actionEntities?: shared.ActionEntity[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
