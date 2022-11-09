import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestRoomRescueKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: number;
}


export class RequestRoomRescueKeyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class RequestRoomRescueKeyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestRoomRescueKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestRoomRescueKeyPathParams;

  @Metadata()
  queryParams: RequestRoomRescueKeyQueryParams;

  @Metadata()
  headers: RequestRoomRescueKeyHeaders;
}


export class RequestRoomRescueKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  fileKey?: shared.FileKey;

  @Metadata()
  statusCode: number;
}
