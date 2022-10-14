package shared

type ListTrackersResponse struct {
	Entries   []ListTrackersResponseEntry `json:"Entries"`
	NextToken *string                     `json:"NextToken,omitempty"`
}
