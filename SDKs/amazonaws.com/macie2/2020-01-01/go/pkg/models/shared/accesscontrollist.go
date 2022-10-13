package shared

type AccessControlList struct {
	AllowsPublicReadAccess  *bool `json:"allowsPublicReadAccess"`
	AllowsPublicWriteAccess *bool `json:"allowsPublicWriteAccess"`
}
