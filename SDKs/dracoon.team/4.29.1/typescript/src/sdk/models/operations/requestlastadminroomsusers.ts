import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestLastAdminRoomsUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class RequestLastAdminRoomsUsersHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestLastAdminRoomsUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestLastAdminRoomsUsersPathParams;

  @Metadata()
  headers: RequestLastAdminRoomsUsersHeaders;
}


export class RequestLastAdminRoomsUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  lastAdminUserRoomList?: shared.LastAdminUserRoomList;

  @Metadata()
  statusCode: number;
}
