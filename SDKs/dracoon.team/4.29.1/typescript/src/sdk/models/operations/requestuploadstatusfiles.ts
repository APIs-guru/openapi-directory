import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestUploadStatusFilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class RequestUploadStatusFilesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestUploadStatusFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestUploadStatusFilesPathParams;

  @SpeakeasyMetadata()
  headers: RequestUploadStatusFilesHeaders;
}


export class RequestUploadStatusFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  s3FileUploadStatus?: shared.S3FileUploadStatus;

  @SpeakeasyMetadata()
  statusCode: number;
}
