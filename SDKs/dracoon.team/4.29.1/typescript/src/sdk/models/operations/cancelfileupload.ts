import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CancelFileUploadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class CancelFileUploadHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class CancelFileUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelFileUploadPathParams;

  @SpeakeasyMetadata()
  headers: CancelFileUploadHeaders;
}


export class CancelFileUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
