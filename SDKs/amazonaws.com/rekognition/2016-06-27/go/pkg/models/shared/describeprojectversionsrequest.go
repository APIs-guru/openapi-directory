package shared

type DescribeProjectVersionsRequest struct {
	MaxResults   *int64   `json:"MaxResults"`
	NextToken    *string  `json:"NextToken"`
	ProjectArn   string   `json:"ProjectArn"`
	VersionNames []string `json:"VersionNames"`
}
