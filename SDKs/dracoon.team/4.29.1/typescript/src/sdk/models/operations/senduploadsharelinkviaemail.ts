import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendUploadShareLinkViaEmailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=share_id" })
  shareId: number;
}


export class SendUploadShareLinkViaEmailHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class SendUploadShareLinkViaEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SendUploadShareLinkViaEmailPathParams;

  @SpeakeasyMetadata()
  headers: SendUploadShareLinkViaEmailHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UploadShareLinkEmail;
}


export class SendUploadShareLinkViaEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
