package shared



type BucketPublicAccess struct {
    EffectivePermission *EffectivePermissionEnum `json:"effectivePermission,omitempty"`
    PermissionConfiguration *BucketPermissionConfiguration `json:"permissionConfiguration,omitempty"`
    
}

