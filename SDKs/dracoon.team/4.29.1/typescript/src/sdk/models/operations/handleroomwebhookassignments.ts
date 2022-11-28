import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class HandleRoomWebhookAssignmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class HandleRoomWebhookAssignmentsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class HandleRoomWebhookAssignmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: HandleRoomWebhookAssignmentsPathParams;

  @SpeakeasyMetadata()
  headers: HandleRoomWebhookAssignmentsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateRoomWebhookRequest;
}


export class HandleRoomWebhookAssignmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  roomWebhookList?: shared.RoomWebhookList;

  @SpeakeasyMetadata()
  statusCode: number;
}
