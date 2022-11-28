import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class GetGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGroupsQueryParams;
}


export class GetGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GroupEntity })
  groupEntities?: shared.GroupEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
