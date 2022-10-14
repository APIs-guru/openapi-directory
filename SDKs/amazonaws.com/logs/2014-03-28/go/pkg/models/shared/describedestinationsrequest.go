package shared

type DescribeDestinationsRequest struct {
	DestinationNamePrefix *string `json:"DestinationNamePrefix,omitempty"`
	Limit                 *int64  `json:"limit,omitempty"`
	NextToken             *string `json:"nextToken,omitempty"`
}
