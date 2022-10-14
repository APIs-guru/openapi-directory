package shared

type ListPlaceIndexesResponse struct {
	Entries   []ListPlaceIndexesResponseEntry `json:"Entries"`
	NextToken *string                         `json:"NextToken,omitempty"`
}
