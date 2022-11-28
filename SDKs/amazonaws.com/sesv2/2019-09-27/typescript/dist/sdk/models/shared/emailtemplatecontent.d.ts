import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
export declare class EmailTemplateContent extends SpeakeasyBase {
    html?: string;
    subject?: string;
    text?: string;
}
