import { SpeakeasyBase } from "../../../internal/utils";
import { RawEmail } from "./rawemail";
import { SimpleEmail } from "./simpleemail";
/**
 * Specifies the default settings and content for a one-time email message that's sent directly to an endpoint.
**/
export declare class EmailMessage extends SpeakeasyBase {
    body?: string;
    feedbackForwardingAddress?: string;
    fromAddress?: string;
    rawEmail?: RawEmail;
    replyToAddresses?: string[];
    simpleEmail?: SimpleEmail;
    substitutions?: Map<string, string[]>;
}
