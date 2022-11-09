import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RevokeRoomGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class RevokeRoomGroupsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RevokeRoomGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RevokeRoomGroupsPathParams;

  @Metadata()
  headers: RevokeRoomGroupsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RoomGroupsDeleteBatchRequest;
}


export class RevokeRoomGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
