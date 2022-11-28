import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestPendingAssignmentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class RequestPendingAssignmentsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestPendingAssignmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RequestPendingAssignmentsQueryParams;

  @SpeakeasyMetadata()
  headers: RequestPendingAssignmentsHeaders;
}


export class RequestPendingAssignmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  pendingAssignmentList?: shared.PendingAssignmentList;

  @SpeakeasyMetadata()
  statusCode: number;
}
