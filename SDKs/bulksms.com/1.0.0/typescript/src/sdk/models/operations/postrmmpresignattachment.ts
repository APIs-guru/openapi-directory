import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRmmPreSignAttachmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostRmmPreSignAttachmentRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PreSignRequest;

  @Metadata()
  security: PostRmmPreSignAttachmentSecurity;
}


export class PostRmmPreSignAttachmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  preSignInfo?: shared.PreSignInfo;

  @Metadata()
  statusCode: number;
}
