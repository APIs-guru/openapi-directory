import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAndPreserveRoomRescueKeyPairPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class CreateAndPreserveRoomRescueKeyPairHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class CreateAndPreserveRoomRescueKeyPairRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateAndPreserveRoomRescueKeyPairPathParams;

  @Metadata()
  headers: CreateAndPreserveRoomRescueKeyPairHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateKeyPairRequest;
}


export class CreateAndPreserveRoomRescueKeyPairResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
