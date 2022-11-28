package shared

// ApplicationsResponse
// Provides information about all of your applications.
type ApplicationsResponse struct {
	Item      []ApplicationResponse `json:"Item,omitempty"`
	NextToken *string               `json:"NextToken,omitempty"`
}
