import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateRoomPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class UpdateRoomHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class UpdateRoomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateRoomPathParams;

  @SpeakeasyMetadata()
  headers: UpdateRoomHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateRoomRequest;
}


export class UpdateRoomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  node?: shared.Node;

  @SpeakeasyMetadata()
  statusCode: number;
}
