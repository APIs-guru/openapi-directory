package shared

type SubscribedDownloadShareList struct {
	Items []SubscribedDownloadShare `json:"items"`
	Range Range                     `json:"range"`
}
