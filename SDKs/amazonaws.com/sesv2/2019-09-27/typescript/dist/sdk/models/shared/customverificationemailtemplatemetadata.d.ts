import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a custom verification email template.
**/
export declare class CustomVerificationEmailTemplateMetadata extends SpeakeasyBase {
    failureRedirectionUrl?: string;
    fromEmailAddress?: string;
    successRedirectionUrl?: string;
    templateName?: string;
    templateSubject?: string;
}
