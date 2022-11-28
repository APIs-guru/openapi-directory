import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryType } from "./categorytype";
import { InternationalReturnOverrideType } from "./internationalreturnoverridetype";
import { TimeDuration } from "./timeduration";
import { Error } from "./error";
/**
 * Complex type that that gets populated with a response containing a return policy.
**/
export declare class SetReturnPolicyResponse extends SpeakeasyBase {
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
    warnings?: Error[];
}
