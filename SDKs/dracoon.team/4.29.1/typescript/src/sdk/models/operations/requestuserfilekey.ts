import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestUserFileKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: number;
}


export class RequestUserFileKeyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class RequestUserFileKeyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestUserFileKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestUserFileKeyPathParams;

  @SpeakeasyMetadata()
  queryParams: RequestUserFileKeyQueryParams;

  @SpeakeasyMetadata()
  headers: RequestUserFileKeyHeaders;
}


export class RequestUserFileKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  fileKey?: shared.FileKey;

  @SpeakeasyMetadata()
  statusCode: number;
}
