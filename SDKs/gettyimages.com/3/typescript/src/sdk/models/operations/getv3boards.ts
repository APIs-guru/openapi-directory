import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3BoardsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=board_relationship" })
  boardRelationship?: shared.BoardRelationshipEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: shared.BoardSortOrderEnum;
}


export class GetV3BoardsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV3BoardsQueryParams;
}


export class GetV3BoardsResponse extends SpeakeasyBase {
  @Metadata()
  boardList?: shared.BoardList;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
