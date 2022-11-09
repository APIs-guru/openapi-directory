import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostResendPhoneNumberAuthRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class PostResendPhoneNumberAuthResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
