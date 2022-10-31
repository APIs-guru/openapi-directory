package shared



type CloudFormationStackRecordSourceInfo struct {
    Arn *string `json:"arn,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceType *CloudFormationStackRecordSourceTypeEnum `json:"resourceType,omitempty"`
    
}

