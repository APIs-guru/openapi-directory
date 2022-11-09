import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetRoomRescueKeyPairPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class SetRoomRescueKeyPairHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class SetRoomRescueKeyPairRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetRoomRescueKeyPairPathParams;

  @Metadata()
  headers: SetRoomRescueKeyPairHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UserKeyPairContainer;
}


export class SetRoomRescueKeyPairResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
