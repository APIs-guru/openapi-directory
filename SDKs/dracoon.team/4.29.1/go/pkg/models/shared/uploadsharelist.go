package shared

type UploadShareList struct {
	Items []UploadShare `json:"items"`
	Range Range         `json:"range"`
}
