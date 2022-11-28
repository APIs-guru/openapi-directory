package shared

// DownloadShareList
// List of Download Shares
type DownloadShareList struct {
	Items []DownloadShare `json:"items"`
	Range Range           `json:"range"`
}
