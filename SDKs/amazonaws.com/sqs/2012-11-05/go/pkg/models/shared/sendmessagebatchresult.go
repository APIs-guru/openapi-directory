package shared

// SendMessageBatchResult
// For each message in the batch, the response contains a <code> <a>SendMessageBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.
type SendMessageBatchResult struct {
	Failed     []BatchResultErrorEntry
	Successful []SendMessageBatchResultEntry
}
