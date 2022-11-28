import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that describes the recipients for an email.
**/
export declare class Destination extends SpeakeasyBase {
    bccAddresses?: string[];
    ccAddresses?: string[];
    toAddresses?: string[];
}
