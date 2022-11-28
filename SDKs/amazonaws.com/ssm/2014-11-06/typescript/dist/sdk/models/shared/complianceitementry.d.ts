import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceSeverityEnum } from "./complianceseverityenum";
import { ComplianceStatusEnum } from "./compliancestatusenum";
/**
 * Information about a compliance item.
**/
export declare class ComplianceItemEntry extends SpeakeasyBase {
    details?: Map<string, string>;
    id?: string;
    severity: ComplianceSeverityEnum;
    status: ComplianceStatusEnum;
    title?: string;
}
