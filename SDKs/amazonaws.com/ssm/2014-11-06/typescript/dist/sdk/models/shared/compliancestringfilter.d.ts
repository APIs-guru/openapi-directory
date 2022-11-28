import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceQueryOperatorTypeEnum } from "./compliancequeryoperatortypeenum";
/**
 * One or more filters. Use a filter to return a more specific list of results.
**/
export declare class ComplianceStringFilter extends SpeakeasyBase {
    key?: string;
    type?: ComplianceQueryOperatorTypeEnum;
    values?: string[];
}
