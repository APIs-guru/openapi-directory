package shared



type SearchResults struct {
    Domains []Domains `json:"domains,omitempty"`
    NextPage *string `json:"next_page,omitempty"`
    Time string `json:"time"`
    Total *int64 `json:"total,omitempty"`
    
}

