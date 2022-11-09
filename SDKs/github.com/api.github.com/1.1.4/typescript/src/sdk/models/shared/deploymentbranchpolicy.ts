import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeploymentBranchPolicy
/** 
 * The type of deployment branch policy for this environment. To allow all branches to deploy, set to `null`.
**/
export class DeploymentBranchPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom_branch_policies" })
  customBranchPolicies: boolean;

  @Metadata({ data: "json, name=protected_branches" })
  protectedBranches: boolean;
}
