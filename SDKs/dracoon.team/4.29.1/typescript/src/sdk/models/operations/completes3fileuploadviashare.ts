import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompleteS3FileUploadViaSharePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class CompleteS3FileUploadViaShareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompleteS3FileUploadViaSharePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CompleteS3ShareUploadRequest;
}


export class CompleteS3FileUploadViaShareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
