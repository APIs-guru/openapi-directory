package shared

// ChangeMessageVisibilityBatchResult
// For each message in the batch, the response contains a <code> <a>ChangeMessageVisibilityBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.
type ChangeMessageVisibilityBatchResult struct {
	Failed     []BatchResultErrorEntry
	Successful []ChangeMessageVisibilityBatchResultEntry
}
