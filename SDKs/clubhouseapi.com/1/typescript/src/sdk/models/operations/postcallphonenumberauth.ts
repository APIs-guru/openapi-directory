import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostCallPhoneNumberAuthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class PostCallPhoneNumberAuthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
