package shared

type Body struct {
	HTML *Content `json:"Html"`
	Text *Content `json:"Text"`
}
