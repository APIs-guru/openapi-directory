import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmailTemplateResponse } from "./emailtemplateresponse";



export class GetEmailTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmailTemplateResponse" })
  emailTemplateResponse: EmailTemplateResponse;
}
