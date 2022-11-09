import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsIamAttachedManagedPolicy } from "./awsiamattachedmanagedpolicy";
import { AwsIamGroupPolicy } from "./awsiamgrouppolicy";


// AwsIamGroupDetails
/** 
 * Contains details about an IAM group.
**/
export class AwsIamGroupDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttachedManagedPolicies", elemType: shared.AwsIamAttachedManagedPolicy })
  attachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  @Metadata({ data: "json, name=CreateDate" })
  createDate?: string;

  @Metadata({ data: "json, name=GroupId" })
  groupId?: string;

  @Metadata({ data: "json, name=GroupName" })
  groupName?: string;

  @Metadata({ data: "json, name=GroupPolicyList", elemType: shared.AwsIamGroupPolicy })
  groupPolicyList?: AwsIamGroupPolicy[];

  @Metadata({ data: "json, name=Path" })
  path?: string;
}
