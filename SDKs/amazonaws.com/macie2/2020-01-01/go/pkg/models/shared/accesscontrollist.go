package shared

type AccessControlList struct {
	AllowsPublicReadAccess  *bool `json:"allowsPublicReadAccess,omitempty"`
	AllowsPublicWriteAccess *bool `json:"allowsPublicWriteAccess,omitempty"`
}
