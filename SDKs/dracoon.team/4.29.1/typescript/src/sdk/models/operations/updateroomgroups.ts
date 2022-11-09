import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateRoomGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class UpdateRoomGroupsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateRoomGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateRoomGroupsPathParams;

  @Metadata()
  headers: UpdateRoomGroupsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RoomGroupsAddBatchRequest;
}


export class UpdateRoomGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
