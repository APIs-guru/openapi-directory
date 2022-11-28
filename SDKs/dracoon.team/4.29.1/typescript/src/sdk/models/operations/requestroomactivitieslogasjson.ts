import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestRoomActivitiesLogAsJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class RequestRoomActivitiesLogAsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_end" })
  dateEnd?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_start" })
  dateStart?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class RequestRoomActivitiesLogAsJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestRoomActivitiesLogAsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestRoomActivitiesLogAsJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: RequestRoomActivitiesLogAsJsonQueryParams;

  @SpeakeasyMetadata()
  headers: RequestRoomActivitiesLogAsJsonHeaders;
}


export class RequestRoomActivitiesLogAsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  logEventList?: shared.LogEventList;

  @SpeakeasyMetadata()
  statusCode: number;
}
