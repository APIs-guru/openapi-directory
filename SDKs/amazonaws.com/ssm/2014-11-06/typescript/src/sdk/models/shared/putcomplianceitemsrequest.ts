import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComplianceExecutionSummary } from "./complianceexecutionsummary";
import { ComplianceItemEntry } from "./complianceitementry";
import { ComplianceUploadTypeEnum } from "./complianceuploadtypeenum";


export class PutComplianceItemsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceType" })
  complianceType: string;

  @Metadata({ data: "json, name=ExecutionSummary" })
  executionSummary: ComplianceExecutionSummary;

  @Metadata({ data: "json, name=ItemContentHash" })
  itemContentHash?: string;

  @Metadata({ data: "json, name=Items", elemType: shared.ComplianceItemEntry })
  items: ComplianceItemEntry[];

  @Metadata({ data: "json, name=ResourceId" })
  resourceId: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType: string;

  @Metadata({ data: "json, name=UploadType" })
  uploadType?: ComplianceUploadTypeEnum;
}
