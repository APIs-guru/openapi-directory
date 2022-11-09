import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmailChannelResponse } from "./emailchannelresponse";


export class DeleteEmailChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmailChannelResponse" })
  emailChannelResponse: EmailChannelResponse;
}
