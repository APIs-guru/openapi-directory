import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3BoardsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=board_relationship" })
  boardRelationship?: shared.BoardRelationshipEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: shared.BoardSortOrderEnum;
}


export class GetV3BoardsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV3BoardsQueryParams;
}


export class GetV3BoardsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boardList?: shared.BoardList;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
