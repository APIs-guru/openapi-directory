import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateRoomHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class CreateRoomRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateRoomHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateRoomRequest;
}


export class CreateRoomResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  node?: shared.Node;

  @Metadata()
  statusCode: number;
}
