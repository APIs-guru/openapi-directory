package shared




type PermissionRoleEnum string

const (
    PermissionRoleEnumCommenter PermissionRoleEnum = "commenter"
PermissionRoleEnumFileOrganizer PermissionRoleEnum = "fileOrganizer"
PermissionRoleEnumOwner PermissionRoleEnum = "owner"
PermissionRoleEnumPublishedReader PermissionRoleEnum = "publishedReader"
PermissionRoleEnumReader PermissionRoleEnum = "reader"
PermissionRoleEnumWriter PermissionRoleEnum = "writer"
)



type PermissionTypeEnum string

const (
    PermissionTypeEnumAnyone PermissionTypeEnum = "anyone"
PermissionTypeEnumDomain PermissionTypeEnum = "domain"
PermissionTypeEnumGroup PermissionTypeEnum = "group"
PermissionTypeEnumUser PermissionTypeEnum = "user"
)


type Permission struct {
    Name *string `json:"name,omitempty"`
    PermissionID *string `json:"permissionId,omitempty"`
    Role *PermissionRoleEnum `json:"role,omitempty"`
    Type *PermissionTypeEnum `json:"type,omitempty"`
    User *User `json:"user,omitempty"`
    WithLink *bool `json:"withLink,omitempty"`
    
}

