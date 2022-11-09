import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompleteFileUploadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class CompleteFileUploadHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class CompleteFileUploadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompleteFileUploadPathParams;

  @Metadata()
  headers: CompleteFileUploadHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CompleteUploadRequest;
}


export class CompleteFileUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  node?: shared.Node;

  @Metadata()
  statusCode: number;
}
