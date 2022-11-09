import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompleteS3FileUploadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class CompleteS3FileUploadHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class CompleteS3FileUploadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompleteS3FileUploadPathParams;

  @Metadata()
  headers: CompleteS3FileUploadHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CompleteS3FileUploadRequest;
}


export class CompleteS3FileUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
