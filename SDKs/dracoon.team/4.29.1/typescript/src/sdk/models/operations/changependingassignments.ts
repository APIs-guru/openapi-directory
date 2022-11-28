import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChangePendingAssignmentsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class ChangePendingAssignmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ChangePendingAssignmentsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PendingAssignmentsRequest;
}


export class ChangePendingAssignmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
