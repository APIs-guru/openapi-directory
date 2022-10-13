package shared

type VideoSessionReferrer struct {
	Medium     *string `json:"medium"`
	SearchTerm *string `json:"searchTerm"`
	Source     *string `json:"source"`
	URL        *string `json:"url"`
}
