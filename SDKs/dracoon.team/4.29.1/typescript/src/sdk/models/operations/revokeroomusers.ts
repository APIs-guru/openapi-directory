import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RevokeRoomUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class RevokeRoomUsersHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RevokeRoomUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RevokeRoomUsersPathParams;

  @SpeakeasyMetadata()
  headers: RevokeRoomUsersHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RoomUsersDeleteBatchRequest;
}


export class RevokeRoomUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
