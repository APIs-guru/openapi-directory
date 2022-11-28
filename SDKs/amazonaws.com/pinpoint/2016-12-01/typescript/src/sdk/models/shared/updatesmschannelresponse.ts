import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SmsChannelResponse } from "./smschannelresponse";



export class UpdateSmsChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SMSChannelResponse" })
  smsChannelResponse: SmsChannelResponse;
}
