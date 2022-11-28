import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateTypeEnum } from "./templatetypeenum";
/**
 * Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel.
**/
export declare class VoiceTemplateResponse extends SpeakeasyBase {
    arn?: string;
    body?: string;
    creationDate: string;
    defaultSubstitutions?: string;
    languageCode?: string;
    lastModifiedDate: string;
    templateDescription?: string;
    templateName: string;
    templateType: TemplateTypeEnum;
    version?: string;
    voiceId?: string;
    tags?: Map<string, string>;
}
