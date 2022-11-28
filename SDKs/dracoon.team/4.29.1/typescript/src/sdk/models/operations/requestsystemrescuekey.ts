import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestSystemRescueKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: number;
}


export class RequestSystemRescueKeyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class RequestSystemRescueKeyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestSystemRescueKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestSystemRescueKeyPathParams;

  @SpeakeasyMetadata()
  queryParams: RequestSystemRescueKeyQueryParams;

  @SpeakeasyMetadata()
  headers: RequestSystemRescueKeyHeaders;
}


export class RequestSystemRescueKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  fileKey?: shared.FileKey;

  @SpeakeasyMetadata()
  statusCode: number;
}
