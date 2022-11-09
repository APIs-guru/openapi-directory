import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendDownloadShareLinkViaEmailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=share_id" })
  shareId: number;
}


export class SendDownloadShareLinkViaEmailHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class SendDownloadShareLinkViaEmailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SendDownloadShareLinkViaEmailPathParams;

  @Metadata()
  headers: SendDownloadShareLinkViaEmailHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DownloadShareLinkEmail;
}


export class SendDownloadShareLinkViaEmailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
