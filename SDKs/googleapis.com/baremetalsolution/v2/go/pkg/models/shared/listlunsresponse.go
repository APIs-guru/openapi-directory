package shared

// ListLunsResponse
// Response message containing the list of storage volume luns.
type ListLunsResponse struct {
	Luns          []Lun    `json:"luns,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
}
