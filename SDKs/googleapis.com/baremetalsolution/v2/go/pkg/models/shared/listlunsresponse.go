package shared

type ListLunsResponse struct {
	Luns          []Lun    `json:"luns"`
	NextPageToken *string  `json:"nextPageToken"`
	Unreachable   []string `json:"unreachable"`
}
