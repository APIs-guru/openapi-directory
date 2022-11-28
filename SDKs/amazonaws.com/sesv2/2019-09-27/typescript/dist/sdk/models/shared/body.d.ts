import { SpeakeasyBase } from "../../../internal/utils";
import { Content } from "./content";
/**
 * Represents the body of the email message.
**/
export declare class Body extends SpeakeasyBase {
    html?: Content;
    text?: Content;
}
