package shared

// AlwaysOnVpnPackage
// Configuration for an always-on VPN connection.
type AlwaysOnVpnPackage struct {
	LockdownEnabled *bool   `json:"lockdownEnabled,omitempty"`
	PackageName     *string `json:"packageName,omitempty"`
}
