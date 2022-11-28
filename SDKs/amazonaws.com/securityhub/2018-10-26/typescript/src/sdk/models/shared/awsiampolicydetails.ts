import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsIamPolicyVersion } from "./awsiampolicyversion";



// AwsIamPolicyDetails
/** 
 * Represents an IAM permissions policy.
**/
export class AwsIamPolicyDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttachmentCount" })
  attachmentCount?: number;

  @SpeakeasyMetadata({ data: "json, name=CreateDate" })
  createDate?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultVersionId" })
  defaultVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=IsAttachable" })
  isAttachable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionsBoundaryUsageCount" })
  permissionsBoundaryUsageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=PolicyId" })
  policyId?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyName" })
  policyName?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyVersionList", elemType: AwsIamPolicyVersion })
  policyVersionList?: AwsIamPolicyVersion[];

  @SpeakeasyMetadata({ data: "json, name=UpdateDate" })
  updateDate?: string;
}
