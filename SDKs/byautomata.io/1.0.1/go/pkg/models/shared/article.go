package shared

type Article struct {
	Link    *string `json:"link,omitempty"`
	Pubdate *string `json:"pubdate,omitempty"`
	Title   *string `json:"title,omitempty"`
}
