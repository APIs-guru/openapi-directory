import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestRoomGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class RequestRoomGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class RequestRoomGroupsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestRoomGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestRoomGroupsPathParams;

  @Metadata()
  queryParams: RequestRoomGroupsQueryParams;

  @Metadata()
  headers: RequestRoomGroupsHeaders;
}


export class RequestRoomGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  roomGroupList?: shared.RoomGroupList;

  @Metadata()
  statusCode: number;
}
