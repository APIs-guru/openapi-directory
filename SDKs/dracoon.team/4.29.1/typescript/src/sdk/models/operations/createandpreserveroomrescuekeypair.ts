import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAndPreserveRoomRescueKeyPairPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class CreateAndPreserveRoomRescueKeyPairHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class CreateAndPreserveRoomRescueKeyPairRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateAndPreserveRoomRescueKeyPairPathParams;

  @SpeakeasyMetadata()
  headers: CreateAndPreserveRoomRescueKeyPairHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateKeyPairRequest;
}


export class CreateAndPreserveRoomRescueKeyPairResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
