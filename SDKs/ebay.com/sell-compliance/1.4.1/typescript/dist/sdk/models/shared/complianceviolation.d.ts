import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ComplianceDetail } from "./compliancedetail";
/**
 * This type is used by each listing violation that is returned under the listingViolations container.
**/
export declare class ComplianceViolation extends SpeakeasyBase {
    complianceType?: string;
    listingId?: string;
    offerId?: string;
    sku?: string;
    violations?: ComplianceDetail[];
}
