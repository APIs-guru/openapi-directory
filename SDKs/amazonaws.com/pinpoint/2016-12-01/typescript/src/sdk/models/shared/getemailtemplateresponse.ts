import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmailTemplateResponse } from "./emailtemplateresponse";


export class GetEmailTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmailTemplateResponse" })
  emailTemplateResponse: EmailTemplateResponse;
}
