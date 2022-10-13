package shared

type Preview struct {
	Fallback   *string `json:"fallback"`
	Footer     *string `json:"footer"`
	Header     *string `json:"header"`
	HeaderLink *string `json:"header_link"`
	HTMLText   *string `json:"html_text"`
	Text       *string `json:"text"`
	Title      *string `json:"title"`
	TitleLink  *string `json:"title_link"`
}
