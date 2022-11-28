import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The following elements are returned by the service.
**/
export declare class GetCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
    failureRedirectionUrl?: string;
    fromEmailAddress?: string;
    successRedirectionUrl?: string;
    templateContent?: string;
    templateName?: string;
    templateSubject?: string;
}
