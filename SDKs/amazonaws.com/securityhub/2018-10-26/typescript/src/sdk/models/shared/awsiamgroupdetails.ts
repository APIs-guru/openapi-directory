import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsIamAttachedManagedPolicy } from "./awsiamattachedmanagedpolicy";
import { AwsIamGroupPolicy } from "./awsiamgrouppolicy";



// AwsIamGroupDetails
/** 
 * Contains details about an IAM group.
**/
export class AwsIamGroupDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttachedManagedPolicies", elemType: AwsIamAttachedManagedPolicy })
  attachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  @SpeakeasyMetadata({ data: "json, name=CreateDate" })
  createDate?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupName" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupPolicyList", elemType: AwsIamGroupPolicy })
  groupPolicyList?: AwsIamGroupPolicy[];

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;
}
