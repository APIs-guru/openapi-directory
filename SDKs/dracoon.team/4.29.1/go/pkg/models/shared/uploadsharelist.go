package shared

// UploadShareList
// List of Upload Shares
type UploadShareList struct {
	Items []UploadShare `json:"items"`
	Range Range         `json:"range"`
}
