import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestUsersRoomsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class RequestUsersRoomsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class RequestUsersRoomsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestUsersRoomsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestUsersRoomsPathParams;

  @SpeakeasyMetadata()
  queryParams: RequestUsersRoomsQueryParams;

  @SpeakeasyMetadata()
  headers: RequestUsersRoomsHeaders;
}


export class RequestUsersRoomsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  roomTreeDataList?: shared.RoomTreeDataList;

  @SpeakeasyMetadata()
  statusCode: number;
}
