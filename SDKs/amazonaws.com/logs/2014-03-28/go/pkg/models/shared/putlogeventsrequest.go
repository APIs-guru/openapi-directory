package shared

type PutLogEventsRequest struct {
	LogEvents     []InputLogEvent `json:"logEvents"`
	LogGroupName  string          `json:"logGroupName"`
	LogStreamName string          `json:"logStreamName"`
	SequenceToken *string         `json:"sequenceToken,omitempty"`
}
