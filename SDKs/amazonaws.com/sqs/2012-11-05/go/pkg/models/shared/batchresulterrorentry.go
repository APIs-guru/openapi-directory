package shared

// BatchResultErrorEntry
// Gives a detailed description of the result of an action on each entry in the request.
type BatchResultErrorEntry struct {
	Code        string
	ID          string
	Message     *string
	SenderFault bool
}
