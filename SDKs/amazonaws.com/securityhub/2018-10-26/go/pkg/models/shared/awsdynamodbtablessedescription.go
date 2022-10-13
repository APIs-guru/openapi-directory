package shared

type AwsDynamoDbTableSseDescription struct {
	InaccessibleEncryptionDateTime *string `json:"InaccessibleEncryptionDateTime"`
	KmsMasterKeyArn                *string `json:"KmsMasterKeyArn"`
	SseType                        *string `json:"SseType"`
	Status                         *string `json:"Status"`
}
