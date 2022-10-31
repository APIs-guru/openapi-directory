package shared



type DeploymentBranchPolicy struct {
    CustomBranchPolicies bool `json:"custom_branch_policies"`
    ProtectedBranches bool `json:"protected_branches"`
    
}

