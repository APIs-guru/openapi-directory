import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleEmailPart } from "./simpleemailpart";
/**
 * Specifies the contents of an email message, composed of a subject, a text part, and an HTML part.
**/
export declare class SimpleEmail extends SpeakeasyBase {
    htmlPart?: SimpleEmailPart;
    subject?: SimpleEmailPart;
    textPart?: SimpleEmailPart;
}
