package shared

type AlwaysOnVpnPackage struct {
	LockdownEnabled *bool   `json:"lockdownEnabled"`
	PackageName     *string `json:"packageName"`
}
