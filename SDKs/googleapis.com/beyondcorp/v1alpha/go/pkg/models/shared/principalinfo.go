package shared

// PrincipalInfo
// PrincipalInfo represents an Identity oneof.
type PrincipalInfo struct {
	ServiceAccount *ServiceAccount `json:"serviceAccount,omitempty"`
}
