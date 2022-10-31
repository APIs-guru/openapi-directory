package shared

type AwsRedshiftClusterClusterParameterStatus struct {
	ParameterApplyErrorDescription *string `json:"ParameterApplyErrorDescription,omitempty"`
	ParameterApplyStatus           *string `json:"ParameterApplyStatus,omitempty"`
	ParameterName                  *string `json:"ParameterName,omitempty"`
}
