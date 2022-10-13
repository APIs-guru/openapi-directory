package shared

type GetRelationalDatabaseMasterUserPasswordRequest struct {
	PasswordVersion        *RelationalDatabasePasswordVersionEnum `json:"passwordVersion"`
	RelationalDatabaseName string                                 `json:"relationalDatabaseName"`
}
