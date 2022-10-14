package shared

type DescribeDestinationsResponse struct {
	Destinations []Destination `json:"destinations,omitempty"`
	NextToken    *string       `json:"nextToken,omitempty"`
}
