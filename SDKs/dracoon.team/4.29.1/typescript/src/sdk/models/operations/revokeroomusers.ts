import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RevokeRoomUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class RevokeRoomUsersHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RevokeRoomUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RevokeRoomUsersPathParams;

  @Metadata()
  headers: RevokeRoomUsersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RoomUsersDeleteBatchRequest;
}


export class RevokeRoomUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
