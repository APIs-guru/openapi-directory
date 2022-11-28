import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestRoomRescueKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: number;
}


export class RequestRoomRescueKeyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class RequestRoomRescueKeyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestRoomRescueKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestRoomRescueKeyPathParams;

  @SpeakeasyMetadata()
  queryParams: RequestRoomRescueKeyQueryParams;

  @SpeakeasyMetadata()
  headers: RequestRoomRescueKeyHeaders;
}


export class RequestRoomRescueKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  fileKey?: shared.FileKey;

  @SpeakeasyMetadata()
  statusCode: number;
}
