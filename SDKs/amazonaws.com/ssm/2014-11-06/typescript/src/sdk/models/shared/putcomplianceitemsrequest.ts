import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComplianceExecutionSummary } from "./complianceexecutionsummary";
import { ComplianceItemEntry } from "./complianceitementry";
import { ComplianceUploadTypeEnum } from "./complianceuploadtypeenum";



export class PutComplianceItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceType" })
  complianceType: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionSummary" })
  executionSummary: ComplianceExecutionSummary;

  @SpeakeasyMetadata({ data: "json, name=ItemContentHash" })
  itemContentHash?: string;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: ComplianceItemEntry })
  items: ComplianceItemEntry[];

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType: string;

  @SpeakeasyMetadata({ data: "json, name=UploadType" })
  uploadType?: ComplianceUploadTypeEnum;
}
