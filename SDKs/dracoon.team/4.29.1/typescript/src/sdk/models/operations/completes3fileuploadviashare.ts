import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompleteS3FileUploadViaSharePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class CompleteS3FileUploadViaShareRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompleteS3FileUploadViaSharePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CompleteS3ShareUploadRequest;
}


export class CompleteS3FileUploadViaShareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
