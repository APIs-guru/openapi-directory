package shared

// WatchCreativeRequest
// A request for watching changes to creative Status.
type WatchCreativeRequest struct {
	Topic *string `json:"topic,omitempty"`
}
