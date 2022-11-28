package shared

type ProductPermissionStateEnum string

const (
	ProductPermissionStateEnumRequired ProductPermissionStateEnum = "required"
	ProductPermissionStateEnumAccepted ProductPermissionStateEnum = "accepted"
)

// ProductPermission
// A product permissions resource represents the set of permissions required by a specific app and whether or not they have been accepted by an enterprise admin. The API can be used to read the set of permissions, and also to update the set to indicate that permissions have been accepted.
type ProductPermission struct {
	PermissionID *string                     `json:"permissionId,omitempty"`
	State        *ProductPermissionStateEnum `json:"state,omitempty"`
}
