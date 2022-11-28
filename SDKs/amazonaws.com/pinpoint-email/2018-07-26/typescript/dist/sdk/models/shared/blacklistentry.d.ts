import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that contains information about a blacklisting event that impacts one of the dedicated IP addresses that is associated with your account.
**/
export declare class BlacklistEntry extends SpeakeasyBase {
    description?: string;
    listingTime?: Date;
    rblName?: string;
}
