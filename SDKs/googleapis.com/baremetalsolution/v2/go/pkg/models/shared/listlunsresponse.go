package shared

type ListLunsResponse struct {
	Luns          []Lun    `json:"luns,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
}
