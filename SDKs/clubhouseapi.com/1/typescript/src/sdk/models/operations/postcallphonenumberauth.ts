import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostCallPhoneNumberAuthRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


export class PostCallPhoneNumberAuthResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
