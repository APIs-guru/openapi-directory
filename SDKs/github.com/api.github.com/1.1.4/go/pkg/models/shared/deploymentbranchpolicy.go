package shared

// DeploymentBranchPolicy
// The type of deployment branch policy for this environment. To allow all branches to deploy, set to `null`.
type DeploymentBranchPolicy struct {
	CustomBranchPolicies bool `json:"custom_branch_policies"`
	ProtectedBranches    bool `json:"protected_branches"`
}
