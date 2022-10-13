package shared

type PermissionEntityPermissionEnum string

const (
	PermissionEntityPermissionEnumFull      PermissionEntityPermissionEnum = "full"
	PermissionEntityPermissionEnumReadonly  PermissionEntityPermissionEnum = "readonly"
	PermissionEntityPermissionEnumWriteonly PermissionEntityPermissionEnum = "writeonly"
	PermissionEntityPermissionEnumList      PermissionEntityPermissionEnum = "list"
	PermissionEntityPermissionEnumHistory   PermissionEntityPermissionEnum = "history"
	PermissionEntityPermissionEnumAdmin     PermissionEntityPermissionEnum = "admin"
	PermissionEntityPermissionEnumBundle    PermissionEntityPermissionEnum = "bundle"
)

type PermissionEntity struct {
	GroupID    *int32                          `json:"group_id"`
	GroupName  *string                         `json:"group_name"`
	ID         *int32                          `json:"id"`
	Path       *string                         `json:"path"`
	Permission *PermissionEntityPermissionEnum `json:"permission"`
	Recursive  *bool                           `json:"recursive"`
	UserID     *int32                          `json:"user_id"`
	Username   *string                         `json:"username"`
}
