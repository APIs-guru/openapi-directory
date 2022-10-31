package shared



type AwsDynamoDbTableSseDescription struct {
    InaccessibleEncryptionDateTime *string `json:"InaccessibleEncryptionDateTime,omitempty"`
    KmsMasterKeyArn *string `json:"KmsMasterKeyArn,omitempty"`
    SseType *string `json:"SseType,omitempty"`
    Status *string `json:"Status,omitempty"`
    
}

