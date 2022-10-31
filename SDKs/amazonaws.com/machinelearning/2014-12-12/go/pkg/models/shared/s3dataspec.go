package shared



type S3DataSpec struct {
    DataLocationS3 string `json:"DataLocationS3"`
    DataRearrangement *string `json:"DataRearrangement,omitempty"`
    DataSchema *string `json:"DataSchema,omitempty"`
    DataSchemaLocationS3 *string `json:"DataSchemaLocationS3,omitempty"`
    
}

