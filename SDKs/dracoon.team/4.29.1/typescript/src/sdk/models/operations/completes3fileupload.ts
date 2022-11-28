import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompleteS3FileUploadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class CompleteS3FileUploadHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class CompleteS3FileUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompleteS3FileUploadPathParams;

  @SpeakeasyMetadata()
  headers: CompleteS3FileUploadHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CompleteS3FileUploadRequest;
}


export class CompleteS3FileUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
