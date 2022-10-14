package shared

type DescribeProjectVersionsRequest struct {
	MaxResults   *int64   `json:"MaxResults,omitempty"`
	NextToken    *string  `json:"NextToken,omitempty"`
	ProjectArn   string   `json:"ProjectArn"`
	VersionNames []string `json:"VersionNames,omitempty"`
}
