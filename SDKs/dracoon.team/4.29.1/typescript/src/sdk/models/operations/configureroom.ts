import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConfigureRoomPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class ConfigureRoomHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class ConfigureRoomRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConfigureRoomPathParams;

  @Metadata()
  headers: ConfigureRoomHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ConfigRoomRequest;
}


export class ConfigureRoomResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  node?: shared.Node;

  @Metadata()
  statusCode: number;
}
