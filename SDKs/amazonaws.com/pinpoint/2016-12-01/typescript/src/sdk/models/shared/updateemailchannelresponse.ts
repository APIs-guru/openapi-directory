import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmailChannelResponse } from "./emailchannelresponse";


export class UpdateEmailChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmailChannelResponse" })
  emailChannelResponse: EmailChannelResponse;
}
