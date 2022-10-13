package shared

type BucketPublicAccess struct {
	EffectivePermission     *EffectivePermissionEnum       `json:"effectivePermission"`
	PermissionConfiguration *BucketPermissionConfiguration `json:"permissionConfiguration"`
}
