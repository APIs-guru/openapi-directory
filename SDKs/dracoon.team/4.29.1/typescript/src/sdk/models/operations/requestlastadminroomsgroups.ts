import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestLastAdminRoomsGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: number;
}


export class RequestLastAdminRoomsGroupsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestLastAdminRoomsGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestLastAdminRoomsGroupsPathParams;

  @SpeakeasyMetadata()
  headers: RequestLastAdminRoomsGroupsHeaders;
}


export class RequestLastAdminRoomsGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  lastAdminGroupRoomList?: shared.LastAdminGroupRoomList;

  @SpeakeasyMetadata()
  statusCode: number;
}
