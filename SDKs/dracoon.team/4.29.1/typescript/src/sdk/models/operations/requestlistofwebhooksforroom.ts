import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestListOfWebhooksForRoomPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class RequestListOfWebhooksForRoomQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class RequestListOfWebhooksForRoomHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestListOfWebhooksForRoomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestListOfWebhooksForRoomPathParams;

  @SpeakeasyMetadata()
  queryParams: RequestListOfWebhooksForRoomQueryParams;

  @SpeakeasyMetadata()
  headers: RequestListOfWebhooksForRoomHeaders;
}


export class RequestListOfWebhooksForRoomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  roomWebhookList?: shared.RoomWebhookList;

  @SpeakeasyMetadata()
  statusCode: number;
}
