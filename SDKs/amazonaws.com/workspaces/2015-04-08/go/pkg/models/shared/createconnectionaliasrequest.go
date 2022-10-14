package shared

type CreateConnectionAliasRequest struct {
	ConnectionString string `json:"ConnectionString"`
	Tags             []Tag  `json:"Tags,omitempty"`
}
