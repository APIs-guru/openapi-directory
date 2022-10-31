package shared

type ProductPermissionStateEnum string

const (
	ProductPermissionStateEnumRequired ProductPermissionStateEnum = "required"
	ProductPermissionStateEnumAccepted ProductPermissionStateEnum = "accepted"
)

type ProductPermission struct {
	PermissionID *string                     `json:"permissionId,omitempty"`
	State        *ProductPermissionStateEnum `json:"state,omitempty"`
}
