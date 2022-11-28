import { SpeakeasyBase } from "../../../internal/utils";
import { CustomVerificationEmailTemplateMetadata } from "./customverificationemailtemplatemetadata";
/**
 * The following elements are returned by the service.
**/
export declare class ListCustomVerificationEmailTemplatesResponse extends SpeakeasyBase {
    customVerificationEmailTemplates?: CustomVerificationEmailTemplateMetadata[];
    nextToken?: string;
}
