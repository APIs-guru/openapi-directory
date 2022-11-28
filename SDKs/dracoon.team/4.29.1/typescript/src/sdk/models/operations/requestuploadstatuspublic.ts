import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestUploadStatusPublicPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class RequestUploadStatusPublicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestUploadStatusPublicPathParams;
}


export class RequestUploadStatusPublicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  s3ShareUploadStatus?: shared.S3ShareUploadStatus;

  @SpeakeasyMetadata()
  statusCode: number;
}
