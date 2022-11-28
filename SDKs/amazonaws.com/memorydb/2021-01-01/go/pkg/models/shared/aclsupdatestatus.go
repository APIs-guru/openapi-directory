package shared

// AcLsUpdateStatus
// The status of the ACL update
type AcLsUpdateStatus struct {
	ACLToApply *string `json:"ACLToApply,omitempty"`
}
