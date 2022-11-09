import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsIamPolicyVersion } from "./awsiampolicyversion";


// AwsIamPolicyDetails
/** 
 * Represents an IAM permissions policy.
**/
export class AwsIamPolicyDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttachmentCount" })
  attachmentCount?: number;

  @Metadata({ data: "json, name=CreateDate" })
  createDate?: string;

  @Metadata({ data: "json, name=DefaultVersionId" })
  defaultVersionId?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=IsAttachable" })
  isAttachable?: boolean;

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=PermissionsBoundaryUsageCount" })
  permissionsBoundaryUsageCount?: number;

  @Metadata({ data: "json, name=PolicyId" })
  policyId?: string;

  @Metadata({ data: "json, name=PolicyName" })
  policyName?: string;

  @Metadata({ data: "json, name=PolicyVersionList", elemType: shared.AwsIamPolicyVersion })
  policyVersionList?: AwsIamPolicyVersion[];

  @Metadata({ data: "json, name=UpdateDate" })
  updateDate?: string;
}
