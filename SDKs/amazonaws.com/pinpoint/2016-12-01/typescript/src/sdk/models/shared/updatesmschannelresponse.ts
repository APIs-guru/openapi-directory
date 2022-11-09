import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SmsChannelResponse } from "./smschannelresponse";


export class UpdateSmsChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SMSChannelResponse" })
  smsChannelResponse: SmsChannelResponse;
}
