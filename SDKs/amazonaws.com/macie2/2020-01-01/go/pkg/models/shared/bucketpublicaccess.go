package shared

// BucketPublicAccess
// Provides information about the permissions settings that determine whether an S3 bucket is publicly accessible.
type BucketPublicAccess struct {
	EffectivePermission     *EffectivePermissionEnum       `json:"effectivePermission,omitempty"`
	PermissionConfiguration *BucketPermissionConfiguration `json:"permissionConfiguration,omitempty"`
}
