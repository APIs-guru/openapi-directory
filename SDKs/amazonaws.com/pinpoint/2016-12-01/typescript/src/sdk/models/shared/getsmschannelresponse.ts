import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SmsChannelResponse } from "./smschannelresponse";


export class GetSmsChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SMSChannelResponse" })
  smsChannelResponse: SmsChannelResponse;
}
