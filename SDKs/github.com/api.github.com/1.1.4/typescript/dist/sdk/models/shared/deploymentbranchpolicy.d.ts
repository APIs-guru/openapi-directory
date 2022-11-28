import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of deployment branch policy for this environment. To allow all branches to deploy, set to `null`.
**/
export declare class DeploymentBranchPolicy extends SpeakeasyBase {
    customBranchPolicies: boolean;
    protectedBranches: boolean;
}
