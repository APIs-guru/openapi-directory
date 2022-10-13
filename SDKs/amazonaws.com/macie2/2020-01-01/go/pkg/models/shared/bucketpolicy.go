package shared

type BucketPolicy struct {
	AllowsPublicReadAccess  *bool `json:"allowsPublicReadAccess"`
	AllowsPublicWriteAccess *bool `json:"allowsPublicWriteAccess"`
}
