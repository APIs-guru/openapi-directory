package shared

type DescribeDestinationsResponse struct {
	Destinations []Destination `json:"destinations"`
	NextToken    *string       `json:"nextToken"`
}
