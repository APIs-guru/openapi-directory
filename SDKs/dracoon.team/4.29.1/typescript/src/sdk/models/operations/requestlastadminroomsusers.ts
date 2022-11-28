import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestLastAdminRoomsUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class RequestLastAdminRoomsUsersHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestLastAdminRoomsUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestLastAdminRoomsUsersPathParams;

  @SpeakeasyMetadata()
  headers: RequestLastAdminRoomsUsersHeaders;
}


export class RequestLastAdminRoomsUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  lastAdminUserRoomList?: shared.LastAdminUserRoomList;

  @SpeakeasyMetadata()
  statusCode: number;
}
