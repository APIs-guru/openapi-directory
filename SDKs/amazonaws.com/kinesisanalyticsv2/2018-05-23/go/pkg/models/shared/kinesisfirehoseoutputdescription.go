package shared



type KinesisFirehoseOutputDescription struct {
    ResourceArn string `json:"ResourceARN"`
    RoleArn *string `json:"RoleARN,omitempty"`
    
}

