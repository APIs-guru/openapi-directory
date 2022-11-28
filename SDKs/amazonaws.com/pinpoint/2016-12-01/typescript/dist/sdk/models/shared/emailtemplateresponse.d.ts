import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateTypeEnum } from "./templatetypeenum";
/**
 * Provides information about the content and settings for a message template that can be used in messages that are sent through the email channel.
**/
export declare class EmailTemplateResponse extends SpeakeasyBase {
    arn?: string;
    creationDate: string;
    defaultSubstitutions?: string;
    htmlPart?: string;
    lastModifiedDate: string;
    recommenderId?: string;
    subject?: string;
    templateDescription?: string;
    templateName: string;
    templateType: TemplateTypeEnum;
    textPart?: string;
    version?: string;
    tags?: Map<string, string>;
}
