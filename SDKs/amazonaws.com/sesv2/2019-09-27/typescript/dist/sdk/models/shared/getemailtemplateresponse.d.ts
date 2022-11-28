import { SpeakeasyBase } from "../../../internal/utils";
import { EmailTemplateContent } from "./emailtemplatecontent";
/**
 * The following element is returned by the service.
**/
export declare class GetEmailTemplateResponse extends SpeakeasyBase {
    templateContent: EmailTemplateContent;
    templateName: string;
}
