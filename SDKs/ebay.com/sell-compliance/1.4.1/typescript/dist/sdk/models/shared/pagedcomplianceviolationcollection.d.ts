import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ComplianceViolation } from "./complianceviolation";
/**
 * This type is the base response type of the getListingViolations method.
**/
export declare class PagedComplianceViolationCollection extends SpeakeasyBase {
    href?: string;
    limit?: number;
    listingViolations?: ComplianceViolation[];
    next?: string;
    offset?: number;
    prev?: string;
    total?: number;
}
