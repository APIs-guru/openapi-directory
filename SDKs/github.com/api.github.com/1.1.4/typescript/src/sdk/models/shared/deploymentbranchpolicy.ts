import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeploymentBranchPolicy
/** 
 * The type of deployment branch policy for this environment. To allow all branches to deploy, set to `null`.
**/
export class DeploymentBranchPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_branch_policies" })
  customBranchPolicies: boolean;

  @SpeakeasyMetadata({ data: "json, name=protected_branches" })
  protectedBranches: boolean;
}
