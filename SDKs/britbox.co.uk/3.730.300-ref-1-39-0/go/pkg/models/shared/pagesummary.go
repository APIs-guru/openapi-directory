package shared

type PageSummary struct {
	ID           string  `json:"id"`
	IsStatic     bool    `json:"isStatic"`
	IsSystemPage bool    `json:"isSystemPage"`
	Key          *string `json:"key,omitempty"`
	Path         string  `json:"path"`
	Template     string  `json:"template"`
	Title        string  `json:"title"`
}
