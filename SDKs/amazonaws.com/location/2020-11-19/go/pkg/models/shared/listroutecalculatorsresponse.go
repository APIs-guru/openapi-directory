package shared

type ListRouteCalculatorsResponse struct {
	Entries   []ListRouteCalculatorsResponseEntry `json:"Entries"`
	NextToken *string                             `json:"NextToken,omitempty"`
}
