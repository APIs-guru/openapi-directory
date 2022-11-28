import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deprecated
**/
export declare class AccountQuota extends SpeakeasyBase {
    quotaRemaining?: number;
    quotaTotal?: number;
    quotaUsed?: number;
}
export declare class Account extends SpeakeasyBase {
    environment?: string;
    features?: string[];
    quota?: AccountQuota;
}
