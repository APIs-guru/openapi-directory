import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestUploadStatusFilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class RequestUploadStatusFilesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestUploadStatusFilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestUploadStatusFilesPathParams;

  @Metadata()
  headers: RequestUploadStatusFilesHeaders;
}


export class RequestUploadStatusFilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  s3FileUploadStatus?: shared.S3FileUploadStatus;

  @Metadata()
  statusCode: number;
}
