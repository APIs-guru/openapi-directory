package shared

type StartSessionRequest struct {
	DocumentName *string             `json:"DocumentName"`
	Parameters   map[string][]string `json:"Parameters"`
	Target       string              `json:"Target"`
}
