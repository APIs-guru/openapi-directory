package shared

// SubscribedUploadShareList
// List of subscribed upload shares
type SubscribedUploadShareList struct {
	Items []SubscribedUploadShare `json:"items"`
	Range Range                   `json:"range"`
}
