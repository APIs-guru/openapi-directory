package shared

type LogStream struct {
	Arn                 *string `json:"arn"`
	CreationTime        *int64  `json:"creationTime"`
	FirstEventTimestamp *int64  `json:"firstEventTimestamp"`
	LastEventTimestamp  *int64  `json:"lastEventTimestamp"`
	LastIngestionTime   *int64  `json:"lastIngestionTime"`
	LogStreamName       *string `json:"logStreamName"`
	StoredBytes         *int64  `json:"storedBytes"`
	UploadSequenceToken *string `json:"uploadSequenceToken"`
}
