package shared

type CloudFormationStackRecordSourceInfo struct {
	Arn          *string                                  `json:"arn"`
	Name         *string                                  `json:"name"`
	ResourceType *CloudFormationStackRecordSourceTypeEnum `json:"resourceType"`
}
