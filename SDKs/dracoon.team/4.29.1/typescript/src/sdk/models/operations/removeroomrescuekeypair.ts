import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveRoomRescueKeyPairPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=room_id" })
  roomId: number;
}


export class RemoveRoomRescueKeyPairQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class RemoveRoomRescueKeyPairHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RemoveRoomRescueKeyPairRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveRoomRescueKeyPairPathParams;

  @Metadata()
  queryParams: RemoveRoomRescueKeyPairQueryParams;

  @Metadata()
  headers: RemoveRoomRescueKeyPairHeaders;
}


export class RemoveRoomRescueKeyPairResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
