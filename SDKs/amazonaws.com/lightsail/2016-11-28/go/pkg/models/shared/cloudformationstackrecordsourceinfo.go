package shared

// CloudFormationStackRecordSourceInfo
// Describes the source of a CloudFormation stack record (i.e., the export snapshot record).
type CloudFormationStackRecordSourceInfo struct {
	Arn          *string                                  `json:"arn,omitempty"`
	Name         *string                                  `json:"name,omitempty"`
	ResourceType *CloudFormationStackRecordSourceTypeEnum `json:"resourceType,omitempty"`
}
