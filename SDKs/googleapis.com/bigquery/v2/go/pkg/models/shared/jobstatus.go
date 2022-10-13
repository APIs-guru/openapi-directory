package shared

type JobStatus struct {
	ErrorResult *ErrorProto  `json:"errorResult"`
	Errors      []ErrorProto `json:"errors"`
	State       *string      `json:"state"`
}
