import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRmmPreSignAttachmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostRmmPreSignAttachmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PreSignRequest;

  @SpeakeasyMetadata()
  security: PostRmmPreSignAttachmentSecurity;
}


export class PostRmmPreSignAttachmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  preSignInfo?: shared.PreSignInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
