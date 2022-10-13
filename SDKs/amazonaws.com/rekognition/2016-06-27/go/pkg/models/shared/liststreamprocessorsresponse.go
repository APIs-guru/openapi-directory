package shared

type ListStreamProcessorsResponse struct {
	NextToken        *string           `json:"NextToken"`
	StreamProcessors []StreamProcessor `json:"StreamProcessors"`
}
