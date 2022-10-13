package shared

type CreateSchemaRequest struct {
	Name   string `json:"name"`
	Schema string `json:"schema"`
}
