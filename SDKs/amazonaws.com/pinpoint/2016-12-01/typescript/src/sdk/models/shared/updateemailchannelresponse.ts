import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmailChannelResponse } from "./emailchannelresponse";



export class UpdateEmailChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmailChannelResponse" })
  emailChannelResponse: EmailChannelResponse;
}
