import { SpeakeasyBase } from "../../../internal/utils";
import { Template } from "./template";
/**
 * Specifies the message template to use for the message, for each type of channel.
**/
export declare class TemplateConfiguration extends SpeakeasyBase {
    emailTemplate?: Template;
    pushTemplate?: Template;
    smsTemplate?: Template;
    voiceTemplate?: Template;
}
