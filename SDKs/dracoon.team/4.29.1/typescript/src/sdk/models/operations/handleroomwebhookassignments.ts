import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class HandleRoomWebhookAssignmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class HandleRoomWebhookAssignmentsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class HandleRoomWebhookAssignmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: HandleRoomWebhookAssignmentsPathParams;

  @Metadata()
  headers: HandleRoomWebhookAssignmentsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateRoomWebhookRequest;
}


export class HandleRoomWebhookAssignmentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  roomWebhookList?: shared.RoomWebhookList;

  @Metadata()
  statusCode: number;
}
