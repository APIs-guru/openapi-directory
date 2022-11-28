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

// Permission
// Contains information about the permissions and type of access allowed with regards to a Google Drive object. This is a subset of the fields contained in a corresponding Drive Permissions object.
type Permission struct {
	Name         *string             `json:"name,omitempty"`
	PermissionID *string             `json:"permissionId,omitempty"`
	Role         *PermissionRoleEnum `json:"role,omitempty"`
	Type         *PermissionTypeEnum `json:"type,omitempty"`
	User         *User               `json:"user,omitempty"`
	WithLink     *bool               `json:"withLink,omitempty"`
}
