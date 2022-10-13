package shared

type AwsRedshiftClusterClusterParameterStatus struct {
	ParameterApplyErrorDescription *string `json:"ParameterApplyErrorDescription"`
	ParameterApplyStatus           *string `json:"ParameterApplyStatus"`
	ParameterName                  *string `json:"ParameterName"`
}
