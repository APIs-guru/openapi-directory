package shared

type AwsDynamoDbTableRestoreSummary struct {
	RestoreDateTime   *string `json:"RestoreDateTime"`
	RestoreInProgress *bool   `json:"RestoreInProgress"`
	SourceBackupArn   *string `json:"SourceBackupArn"`
	SourceTableArn    *string `json:"SourceTableArn"`
}
