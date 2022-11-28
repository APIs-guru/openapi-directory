import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CancelFileUploadViaSharePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class CancelFileUploadViaShareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelFileUploadViaSharePathParams;
}


export class CancelFileUploadViaShareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
