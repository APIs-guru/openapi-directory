import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendUploadShareLinkViaEmailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=share_id" })
  shareId: number;
}


export class SendUploadShareLinkViaEmailHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class SendUploadShareLinkViaEmailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SendUploadShareLinkViaEmailPathParams;

  @Metadata()
  headers: SendUploadShareLinkViaEmailHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UploadShareLinkEmail;
}


export class SendUploadShareLinkViaEmailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
