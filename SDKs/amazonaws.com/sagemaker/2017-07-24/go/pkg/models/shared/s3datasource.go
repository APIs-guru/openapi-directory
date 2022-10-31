package shared



type S3DataSource struct {
    AttributeNames []string `json:"AttributeNames,omitempty"`
    S3DataDistributionType *S3DataDistributionEnum `json:"S3DataDistributionType,omitempty"`
    S3DataType S3DataTypeEnum `json:"S3DataType"`
    S3URI string `json:"S3Uri"`
    
}

