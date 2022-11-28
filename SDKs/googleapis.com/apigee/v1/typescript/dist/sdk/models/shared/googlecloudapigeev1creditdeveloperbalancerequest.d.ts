import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeMoney } from "./googletypemoney";
/**
 * Request for CreditDeveloperBalance.
**/
export declare class GoogleCloudApigeeV1CreditDeveloperBalanceRequest extends SpeakeasyBase {
    transactionAmount?: GoogleTypeMoney;
    transactionId?: string;
}
