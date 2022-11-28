import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceItem } from "./complianceitem";
export declare class ListComplianceItemsResult extends SpeakeasyBase {
    complianceItems?: ComplianceItem[];
    nextToken?: string;
}
