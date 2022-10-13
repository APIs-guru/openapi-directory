package shared

type Instance struct {
	Attributes       map[string]string `json:"Attributes"`
	CreatorRequestID *string           `json:"CreatorRequestId"`
	ID               string            `json:"Id"`
}
