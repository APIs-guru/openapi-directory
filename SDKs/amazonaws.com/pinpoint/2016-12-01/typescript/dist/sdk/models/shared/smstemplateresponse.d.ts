import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateTypeEnum } from "./templatetypeenum";
/**
 * Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
**/
export declare class SmsTemplateResponse extends SpeakeasyBase {
    arn?: string;
    body?: string;
    creationDate: string;
    defaultSubstitutions?: string;
    lastModifiedDate: string;
    recommenderId?: string;
    templateDescription?: string;
    templateName: string;
    templateType: TemplateTypeEnum;
    version?: string;
    tags?: Map<string, string>;
}
