import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryType } from "./categorytype";
import { InternationalReturnOverrideType } from "./internationalreturnoverridetype";
import { TimeDuration } from "./timeduration";
/**
 * Root container that defines the fields for a seller's return policy. The returnPolicy encapsulates a seller's terms for how they handle item returns, the name and description of the policy, and the marketplace and category group(s) to which the return policy is applied. While each seller must define at least one return policy for every marketplace into which they sell, sellers can define multiple return policies for a single marketplace by specifying different configurations for the unique policies.
**/
export declare class ReturnPolicy extends SpeakeasyBase {
    categoryTypes?: CategoryType[];
    description?: string;
    extendedHolidayReturnsOffered?: boolean;
    internationalOverride?: InternationalReturnOverrideType;
    marketplaceId?: string;
    name?: string;
    refundMethod?: string;
    restockingFeePercentage?: string;
    returnInstructions?: string;
    returnMethod?: string;
    returnPeriod?: TimeDuration;
    returnPolicyId?: string;
    returnShippingCostPayer?: string;
    returnsAccepted?: boolean;
}
