import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestDownloadShareQrPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=share_id" })
  shareId: number;
}


export class RequestDownloadShareQrHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestDownloadShareQrRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestDownloadShareQrPathParams;

  @Metadata()
  headers: RequestDownloadShareQrHeaders;
}


export class RequestDownloadShareQrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  downloadShare?: shared.DownloadShare;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
