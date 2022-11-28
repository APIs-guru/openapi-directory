package shared

// Permission
// A Permissions resource represents some extra capability, to be granted to an Android app, which requires explicit consent. An enterprise admin must consent to these permissions on behalf of their users before an entitlement for the app can be created. The permissions collection is read-only. The information provided for each permission (localized name and description) is intended to be used in the MDM user interface when obtaining consent from the enterprise.
type Permission struct {
	Description  *string `json:"description,omitempty"`
	Name         *string `json:"name,omitempty"`
	PermissionID *string `json:"permissionId,omitempty"`
}
