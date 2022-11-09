import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SmsTemplateResponse } from "./smstemplateresponse";


export class GetSmsTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SMSTemplateResponse" })
  smsTemplateResponse: SmsTemplateResponse;
}
