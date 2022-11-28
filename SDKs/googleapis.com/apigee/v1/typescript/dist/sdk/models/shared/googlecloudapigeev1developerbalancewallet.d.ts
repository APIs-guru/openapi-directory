import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeMoney } from "./googletypemoney";
/**
 * Wallet used to manage an account balance for a particular currency.
**/
export declare class GoogleCloudApigeeV1DeveloperBalanceWallet extends SpeakeasyBase {
    balance?: GoogleTypeMoney;
    lastCreditTime?: string;
}
