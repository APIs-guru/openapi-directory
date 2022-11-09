import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestLastAdminRoomsGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: number;
}


export class RequestLastAdminRoomsGroupsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestLastAdminRoomsGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestLastAdminRoomsGroupsPathParams;

  @Metadata()
  headers: RequestLastAdminRoomsGroupsHeaders;
}


export class RequestLastAdminRoomsGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  lastAdminGroupRoomList?: shared.LastAdminGroupRoomList;

  @Metadata()
  statusCode: number;
}
