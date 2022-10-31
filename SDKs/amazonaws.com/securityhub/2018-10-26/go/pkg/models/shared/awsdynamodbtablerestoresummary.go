package shared

type AwsDynamoDbTableRestoreSummary struct {
	RestoreDateTime   *string `json:"RestoreDateTime,omitempty"`
	RestoreInProgress *bool   `json:"RestoreInProgress,omitempty"`
	SourceBackupArn   *string `json:"SourceBackupArn,omitempty"`
	SourceTableArn    *string `json:"SourceTableArn,omitempty"`
}
