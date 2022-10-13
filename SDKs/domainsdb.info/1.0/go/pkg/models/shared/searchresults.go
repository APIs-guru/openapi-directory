package shared

type SearchResults struct {
	Domains  []Domains `json:"domains"`
	NextPage *string   `json:"next_page"`
	Time     string    `json:"time"`
	Total    *int64    `json:"total"`
}
