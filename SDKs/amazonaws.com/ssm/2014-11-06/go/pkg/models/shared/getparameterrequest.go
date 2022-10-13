package shared

type GetParameterRequest struct {
	Name           string `json:"Name"`
	WithDecryption *bool  `json:"WithDecryption"`
}
