package shared

type GetOpsMetadataRequest struct {
	MaxResults     *int64  `json:"MaxResults,omitempty"`
	NextToken      *string `json:"NextToken,omitempty"`
	OpsMetadataArn string  `json:"OpsMetadataArn"`
}
