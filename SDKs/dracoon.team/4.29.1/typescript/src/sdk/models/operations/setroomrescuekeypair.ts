import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetRoomRescueKeyPairPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class SetRoomRescueKeyPairHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class SetRoomRescueKeyPairRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetRoomRescueKeyPairPathParams;

  @SpeakeasyMetadata()
  headers: SetRoomRescueKeyPairHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UserKeyPairContainer;
}


export class SetRoomRescueKeyPairResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
