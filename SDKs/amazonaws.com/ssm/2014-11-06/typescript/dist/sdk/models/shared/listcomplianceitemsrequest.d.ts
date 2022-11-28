import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceStringFilter } from "./compliancestringfilter";
export declare class ListComplianceItemsRequest extends SpeakeasyBase {
    filters?: ComplianceStringFilter[];
    maxResults?: number;
    nextToken?: string;
    resourceIds?: string[];
    resourceTypes?: string[];
}
