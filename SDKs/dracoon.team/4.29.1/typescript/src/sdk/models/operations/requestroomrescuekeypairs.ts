import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestRoomRescueKeyPairsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class RequestRoomRescueKeyPairsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestRoomRescueKeyPairsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestRoomRescueKeyPairsPathParams;

  @SpeakeasyMetadata()
  headers: RequestRoomRescueKeyPairsHeaders;
}


export class RequestRoomRescueKeyPairsResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.UserKeyPairContainerOutput })
  userKeyPairContainers?: shared.UserKeyPairContainerOutput[];
}
