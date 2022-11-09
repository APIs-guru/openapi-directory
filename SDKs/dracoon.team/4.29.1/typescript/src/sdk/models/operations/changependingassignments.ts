import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChangePendingAssignmentsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class ChangePendingAssignmentsRequest extends SpeakeasyBase {
  @Metadata()
  headers: ChangePendingAssignmentsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PendingAssignmentsRequest;
}


export class ChangePendingAssignmentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
