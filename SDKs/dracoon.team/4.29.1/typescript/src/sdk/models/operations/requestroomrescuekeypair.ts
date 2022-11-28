import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestRoomRescueKeyPairPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class RequestRoomRescueKeyPairQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class RequestRoomRescueKeyPairHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestRoomRescueKeyPairRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestRoomRescueKeyPairPathParams;

  @SpeakeasyMetadata()
  queryParams: RequestRoomRescueKeyPairQueryParams;

  @SpeakeasyMetadata()
  headers: RequestRoomRescueKeyPairHeaders;
}


export class RequestRoomRescueKeyPairResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userKeyPairContainer?: shared.UserKeyPairContainerOutput;
}
