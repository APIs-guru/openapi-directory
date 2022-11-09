import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CompleteFileUploadByTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class CompleteFileUploadByTokenHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class CompleteFileUploadByTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompleteFileUploadByTokenPathParams;

  @Metadata()
  headers: CompleteFileUploadByTokenHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CompleteUploadRequest;
}


export class CompleteFileUploadByTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  node?: shared.Node;

  @Metadata()
  statusCode: number;
}
