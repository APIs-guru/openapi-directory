import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestDownloadSharePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=share_id" })
  shareId: number;
}


export class RequestDownloadShareHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestDownloadShareRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestDownloadSharePathParams;

  @Metadata()
  headers: RequestDownloadShareHeaders;
}


export class RequestDownloadShareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  downloadShare?: shared.DownloadShare;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
