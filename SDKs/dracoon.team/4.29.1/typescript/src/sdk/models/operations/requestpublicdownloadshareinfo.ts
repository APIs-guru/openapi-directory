import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestPublicDownloadShareInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;
}


export class RequestPublicDownloadShareInfoHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestPublicDownloadShareInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestPublicDownloadShareInfoPathParams;

  @Metadata()
  headers: RequestPublicDownloadShareInfoHeaders;
}


export class RequestPublicDownloadShareInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  publicDownloadShare?: shared.PublicDownloadShare;

  @Metadata()
  statusCode: number;
}
