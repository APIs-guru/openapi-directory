import { SpeakeasyBase } from "../../../internal/utils";
import { TimeDuration } from "./timeduration";
/**
 * This container defines the category policies that relate to domestic and international return policies (the return shipping is made via a domestic or an international shipping service, respectively).
**/
export declare class ReturnPolicyDetails extends SpeakeasyBase {
    policyDescriptionEnabled?: boolean;
    refundMethods?: string[];
    returnMethods?: string[];
    returnPeriods?: TimeDuration[];
    returnShippingCostPayers?: string[];
    returnsAcceptanceEnabled?: boolean;
}
