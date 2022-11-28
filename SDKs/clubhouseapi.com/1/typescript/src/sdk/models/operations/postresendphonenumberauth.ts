import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostResendPhoneNumberAuthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class PostResendPhoneNumberAuthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
