package shared




type PermissionGrantPolicyEnum string

const (
    PermissionGrantPolicyEnumPermissionPolicyUnspecified PermissionGrantPolicyEnum = "PERMISSION_POLICY_UNSPECIFIED"
PermissionGrantPolicyEnumPrompt PermissionGrantPolicyEnum = "PROMPT"
PermissionGrantPolicyEnumGrant PermissionGrantPolicyEnum = "GRANT"
PermissionGrantPolicyEnumDeny PermissionGrantPolicyEnum = "DENY"
)


type PermissionGrant struct {
    Permission *string `json:"permission,omitempty"`
    Policy *PermissionGrantPolicyEnum `json:"policy,omitempty"`
    
}

