import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestUploadStatusPublicPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class RequestUploadStatusPublicRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestUploadStatusPublicPathParams;
}


export class RequestUploadStatusPublicResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  s3ShareUploadStatus?: shared.S3ShareUploadStatus;

  @Metadata()
  statusCode: number;
}
