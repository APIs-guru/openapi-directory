import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConfigureRoomPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class ConfigureRoomHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class ConfigureRoomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfigureRoomPathParams;

  @SpeakeasyMetadata()
  headers: ConfigureRoomHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ConfigRoomRequest;
}


export class ConfigureRoomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  node?: shared.Node;

  @SpeakeasyMetadata()
  statusCode: number;
}
