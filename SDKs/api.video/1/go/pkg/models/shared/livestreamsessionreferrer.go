package shared

type LiveStreamSessionReferrer struct {
	Medium     *string `json:"medium,omitempty"`
	SearchTerm *string `json:"searchTerm,omitempty"`
	Source     *string `json:"source,omitempty"`
	URL        *string `json:"url,omitempty"`
}
