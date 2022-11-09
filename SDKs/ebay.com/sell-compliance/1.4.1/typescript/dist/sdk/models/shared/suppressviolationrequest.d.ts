import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * This is the base request type of the suppressViolation method, and is used to identify the listing violation that the seller wishes to suppress.
**/
export declare class SuppressViolationRequest extends SpeakeasyBase {
    complianceType?: string;
    listingId?: string;
}
