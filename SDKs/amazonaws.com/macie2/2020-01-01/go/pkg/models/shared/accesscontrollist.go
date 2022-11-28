package shared

// AccessControlList
// Provides information about the permissions settings of the bucket-level access control list (ACL) for an S3 bucket.
type AccessControlList struct {
	AllowsPublicReadAccess  *bool `json:"allowsPublicReadAccess,omitempty"`
	AllowsPublicWriteAccess *bool `json:"allowsPublicWriteAccess,omitempty"`
}
