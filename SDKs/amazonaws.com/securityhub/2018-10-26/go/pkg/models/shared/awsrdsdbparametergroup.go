package shared

type AwsRdsDbParameterGroup struct {
	DbParameterGroupName *string `json:"DbParameterGroupName"`
	ParameterApplyStatus *string `json:"ParameterApplyStatus"`
}
