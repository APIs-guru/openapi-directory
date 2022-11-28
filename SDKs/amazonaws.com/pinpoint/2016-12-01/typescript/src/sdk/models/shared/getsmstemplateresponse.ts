import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SmsTemplateResponse } from "./smstemplateresponse";



export class GetSmsTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SMSTemplateResponse" })
  smsTemplateResponse: SmsTemplateResponse;
}
