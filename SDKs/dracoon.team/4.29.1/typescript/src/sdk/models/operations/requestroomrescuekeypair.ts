import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestRoomRescueKeyPairPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class RequestRoomRescueKeyPairQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class RequestRoomRescueKeyPairHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestRoomRescueKeyPairRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestRoomRescueKeyPairPathParams;

  @Metadata()
  queryParams: RequestRoomRescueKeyPairQueryParams;

  @Metadata()
  headers: RequestRoomRescueKeyPairHeaders;
}


export class RequestRoomRescueKeyPairResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  userKeyPairContainer?: shared.UserKeyPairContainer;
}
