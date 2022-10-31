package shared

type DownloadShareList struct {
	Items []DownloadShare `json:"items"`
	Range Range           `json:"range"`
}
