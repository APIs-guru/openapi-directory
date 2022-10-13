package shared

type Article struct {
	Link    *string `json:"link"`
	Pubdate *string `json:"pubdate"`
	Title   *string `json:"title"`
}
