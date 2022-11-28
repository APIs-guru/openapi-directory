import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceStringFilter } from "./compliancestringfilter";
export declare class ListComplianceSummariesRequest extends SpeakeasyBase {
    filters?: ComplianceStringFilter[];
    maxResults?: number;
    nextToken?: string;
}
