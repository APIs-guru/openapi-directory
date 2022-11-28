import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceStringFilter } from "./compliancestringfilter";
export declare class ListResourceComplianceSummariesRequest extends SpeakeasyBase {
    filters?: ComplianceStringFilter[];
    maxResults?: number;
    nextToken?: string;
}
