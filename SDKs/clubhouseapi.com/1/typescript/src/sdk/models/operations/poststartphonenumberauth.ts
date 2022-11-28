import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostStartPhoneNumberAuthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class PostStartPhoneNumberAuthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
