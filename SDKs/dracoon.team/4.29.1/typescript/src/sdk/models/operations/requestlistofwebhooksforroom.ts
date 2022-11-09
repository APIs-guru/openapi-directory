import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestListOfWebhooksForRoomPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class RequestListOfWebhooksForRoomQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class RequestListOfWebhooksForRoomHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestListOfWebhooksForRoomRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestListOfWebhooksForRoomPathParams;

  @Metadata()
  queryParams: RequestListOfWebhooksForRoomQueryParams;

  @Metadata()
  headers: RequestListOfWebhooksForRoomHeaders;
}


export class RequestListOfWebhooksForRoomResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  roomWebhookList?: shared.RoomWebhookList;

  @Metadata()
  statusCode: number;
}
