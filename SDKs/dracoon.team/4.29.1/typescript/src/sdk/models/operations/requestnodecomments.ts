import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestNodeCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: number;
}


export class RequestNodeCommentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hide_deleted" })
  hideDeleted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class RequestNodeCommentsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestNodeCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestNodeCommentsPathParams;

  @SpeakeasyMetadata()
  queryParams: RequestNodeCommentsQueryParams;

  @SpeakeasyMetadata()
  headers: RequestNodeCommentsHeaders;
}


export class RequestNodeCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commentList?: shared.CommentList;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
