package shared




type PermissionEntityPermissionEnum string

const (
    PermissionEntityPermissionEnumFull PermissionEntityPermissionEnum = "full"
PermissionEntityPermissionEnumReadonly PermissionEntityPermissionEnum = "readonly"
PermissionEntityPermissionEnumWriteonly PermissionEntityPermissionEnum = "writeonly"
PermissionEntityPermissionEnumList PermissionEntityPermissionEnum = "list"
PermissionEntityPermissionEnumHistory PermissionEntityPermissionEnum = "history"
PermissionEntityPermissionEnumAdmin PermissionEntityPermissionEnum = "admin"
PermissionEntityPermissionEnumBundle PermissionEntityPermissionEnum = "bundle"
)


type PermissionEntity struct {
    GroupID *int32 `json:"group_id,omitempty"`
    GroupName *string `json:"group_name,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Path *string `json:"path,omitempty"`
    Permission *PermissionEntityPermissionEnum `json:"permission,omitempty"`
    Recursive *bool `json:"recursive,omitempty"`
    UserID *int32 `json:"user_id,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

