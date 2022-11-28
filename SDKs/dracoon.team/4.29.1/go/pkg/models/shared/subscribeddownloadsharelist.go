package shared

// SubscribedDownloadShareList
// List of subscribed download shares
type SubscribedDownloadShareList struct {
	Items []SubscribedDownloadShare `json:"items"`
	Range Range                     `json:"range"`
}
