package shared

type DescribeDestinationsRequest struct {
	DestinationNamePrefix *string `json:"DestinationNamePrefix"`
	Limit                 *int64  `json:"limit"`
	NextToken             *string `json:"nextToken"`
}
