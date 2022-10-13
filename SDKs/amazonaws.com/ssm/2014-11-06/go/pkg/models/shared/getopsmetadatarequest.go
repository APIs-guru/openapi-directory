package shared

type GetOpsMetadataRequest struct {
	MaxResults     *int64  `json:"MaxResults"`
	NextToken      *string `json:"NextToken"`
	OpsMetadataArn string  `json:"OpsMetadataArn"`
}
