import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompleteFileUploadViaSharePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class CompleteFileUploadViaShareHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class CompleteFileUploadViaShareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompleteFileUploadViaSharePathParams;

  @SpeakeasyMetadata()
  headers: CompleteFileUploadViaShareHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UserFileKeyList;
}


export class CompleteFileUploadViaShareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  publicUploadedFileData?: shared.PublicUploadedFileData;

  @SpeakeasyMetadata()
  statusCode: number;
}
