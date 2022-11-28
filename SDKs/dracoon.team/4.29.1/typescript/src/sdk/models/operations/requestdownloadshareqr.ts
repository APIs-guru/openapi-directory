import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestDownloadShareQrPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=share_id" })
  shareId: number;
}


export class RequestDownloadShareQrHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestDownloadShareQrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestDownloadShareQrPathParams;

  @SpeakeasyMetadata()
  headers: RequestDownloadShareQrHeaders;
}


export class RequestDownloadShareQrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  downloadShare?: shared.DownloadShare;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
