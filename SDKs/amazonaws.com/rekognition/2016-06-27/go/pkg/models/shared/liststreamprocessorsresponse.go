package shared

type ListStreamProcessorsResponse struct {
	NextToken        *string           `json:"NextToken,omitempty"`
	StreamProcessors []StreamProcessor `json:"StreamProcessors,omitempty"`
}
