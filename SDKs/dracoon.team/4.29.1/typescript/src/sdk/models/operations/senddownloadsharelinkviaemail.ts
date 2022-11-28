import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendDownloadShareLinkViaEmailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=share_id" })
  shareId: number;
}


export class SendDownloadShareLinkViaEmailHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class SendDownloadShareLinkViaEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SendDownloadShareLinkViaEmailPathParams;

  @SpeakeasyMetadata()
  headers: SendDownloadShareLinkViaEmailHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DownloadShareLinkEmail;
}


export class SendDownloadShareLinkViaEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
