package shared

type PermissionEnum string

const (
	PermissionEnumAll                PermissionEnum = "ALL"
	PermissionEnumSelect             PermissionEnum = "SELECT"
	PermissionEnumAlter              PermissionEnum = "ALTER"
	PermissionEnumDrop               PermissionEnum = "DROP"
	PermissionEnumDelete             PermissionEnum = "DELETE"
	PermissionEnumInsert             PermissionEnum = "INSERT"
	PermissionEnumDescribe           PermissionEnum = "DESCRIBE"
	PermissionEnumCreateDatabase     PermissionEnum = "CREATE_DATABASE"
	PermissionEnumCreateTable        PermissionEnum = "CREATE_TABLE"
	PermissionEnumDataLocationAccess PermissionEnum = "DATA_LOCATION_ACCESS"
	PermissionEnumCreateTag          PermissionEnum = "CREATE_TAG"
	PermissionEnumAlterTag           PermissionEnum = "ALTER_TAG"
	PermissionEnumDeleteTag          PermissionEnum = "DELETE_TAG"
	PermissionEnumDescribeTag        PermissionEnum = "DESCRIBE_TAG"
	PermissionEnumAssociateTag       PermissionEnum = "ASSOCIATE_TAG"
)
