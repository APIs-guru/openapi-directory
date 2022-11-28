import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceExecutionSummary } from "./complianceexecutionsummary";
import { ComplianceItemEntry } from "./complianceitementry";
import { ComplianceUploadTypeEnum } from "./complianceuploadtypeenum";
export declare class PutComplianceItemsRequest extends SpeakeasyBase {
    complianceType: string;
    executionSummary: ComplianceExecutionSummary;
    itemContentHash?: string;
    items: ComplianceItemEntry[];
    resourceId: string;
    resourceType: string;
    uploadType?: ComplianceUploadTypeEnum;
}
