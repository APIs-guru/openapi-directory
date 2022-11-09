import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestRoomRescueKeyPairsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class RequestRoomRescueKeyPairsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestRoomRescueKeyPairsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestRoomRescueKeyPairsPathParams;

  @Metadata()
  headers: RequestRoomRescueKeyPairsHeaders;
}


export class RequestRoomRescueKeyPairsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.UserKeyPairContainer })
  userKeyPairContainers?: shared.UserKeyPairContainer[];
}
