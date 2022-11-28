package shared

// DeleteMessageBatchResult
// For each message in the batch, the response contains a <code> <a>DeleteMessageBatchResultEntry</a> </code> tag if the message is deleted or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message can't be deleted.
type DeleteMessageBatchResult struct {
	Failed     []BatchResultErrorEntry
	Successful []DeleteMessageBatchResultEntry
}
