import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateRoomUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class UpdateRoomUsersHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateRoomUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateRoomUsersPathParams;

  @Metadata()
  headers: UpdateRoomUsersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RoomUsersAddBatchRequest;
}


export class UpdateRoomUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
