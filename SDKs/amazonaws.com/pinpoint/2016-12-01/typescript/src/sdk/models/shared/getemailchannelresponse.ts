import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmailChannelResponse } from "./emailchannelresponse";



export class GetEmailChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmailChannelResponse" })
  emailChannelResponse: EmailChannelResponse;
}
