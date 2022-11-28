import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveRoomRescueKeyPairPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class RemoveRoomRescueKeyPairQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class RemoveRoomRescueKeyPairHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RemoveRoomRescueKeyPairRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveRoomRescueKeyPairPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveRoomRescueKeyPairQueryParams;

  @SpeakeasyMetadata()
  headers: RemoveRoomRescueKeyPairHeaders;
}


export class RemoveRoomRescueKeyPairResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
