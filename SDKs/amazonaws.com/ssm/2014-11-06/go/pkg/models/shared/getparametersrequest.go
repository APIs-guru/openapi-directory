package shared

type GetParametersRequest struct {
	Names          []string `json:"Names"`
	WithDecryption *bool    `json:"WithDecryption"`
}
