package shared

// DataLakeSettings
// A structure representing a list of AWS Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.
type DataLakeSettings struct {
	CreateDatabaseDefaultPermissions []PrincipalPermissions `json:"CreateDatabaseDefaultPermissions,omitempty"`
	CreateTableDefaultPermissions    []PrincipalPermissions `json:"CreateTableDefaultPermissions,omitempty"`
	DataLakeAdmins                   []DataLakePrincipal    `json:"DataLakeAdmins,omitempty"`
	TrustedResourceOwners            []string               `json:"TrustedResourceOwners,omitempty"`
}
