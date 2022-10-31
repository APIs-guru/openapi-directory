package shared



type DataLakeSettings struct {
    CreateDatabaseDefaultPermissions []PrincipalPermissions `json:"CreateDatabaseDefaultPermissions,omitempty"`
    CreateTableDefaultPermissions []PrincipalPermissions `json:"CreateTableDefaultPermissions,omitempty"`
    DataLakeAdmins []DataLakePrincipal `json:"DataLakeAdmins,omitempty"`
    TrustedResourceOwners []string `json:"TrustedResourceOwners,omitempty"`
    
}

