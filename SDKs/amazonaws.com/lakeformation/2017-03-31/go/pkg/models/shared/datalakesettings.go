package shared

type DataLakeSettings struct {
	CreateDatabaseDefaultPermissions []PrincipalPermissions `json:"CreateDatabaseDefaultPermissions"`
	CreateTableDefaultPermissions    []PrincipalPermissions `json:"CreateTableDefaultPermissions"`
	DataLakeAdmins                   []DataLakePrincipal    `json:"DataLakeAdmins"`
	TrustedResourceOwners            []string               `json:"TrustedResourceOwners"`
}
