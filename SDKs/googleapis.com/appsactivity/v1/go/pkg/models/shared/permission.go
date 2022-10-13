package shared

type PermissionRoleEnum string

const (
	PermissionRoleEnumCommenter       PermissionRoleEnum = "commenter"
	PermissionRoleEnumFileOrganizer   PermissionRoleEnum = "fileOrganizer"
	PermissionRoleEnumOwner           PermissionRoleEnum = "owner"
	PermissionRoleEnumPublishedReader PermissionRoleEnum = "publishedReader"
	PermissionRoleEnumReader          PermissionRoleEnum = "reader"
	PermissionRoleEnumWriter          PermissionRoleEnum = "writer"
)

type PermissionTypeEnum string

const (
	PermissionTypeEnumAnyone PermissionTypeEnum = "anyone"
	PermissionTypeEnumDomain PermissionTypeEnum = "domain"
	PermissionTypeEnumGroup  PermissionTypeEnum = "group"
	PermissionTypeEnumUser   PermissionTypeEnum = "user"
)

type Permission struct {
	Name         *string             `json:"name"`
	PermissionID *string             `json:"permissionId"`
	Role         *PermissionRoleEnum `json:"role"`
	Type         *PermissionTypeEnum `json:"type"`
	User         *User               `json:"user"`
	WithLink     *bool               `json:"withLink"`
}
