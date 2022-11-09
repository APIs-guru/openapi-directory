import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompleteFileUploadViaSharePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class CompleteFileUploadViaShareHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class CompleteFileUploadViaShareRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompleteFileUploadViaSharePathParams;

  @Metadata()
  headers: CompleteFileUploadViaShareHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UserFileKeyList;
}


export class CompleteFileUploadViaShareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  publicUploadedFileData?: shared.PublicUploadedFileData;

  @Metadata()
  statusCode: number;
}
