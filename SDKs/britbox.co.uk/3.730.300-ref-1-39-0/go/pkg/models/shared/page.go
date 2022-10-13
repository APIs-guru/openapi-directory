package shared

type Page struct {
	CustomFields map[string]interface{} `json:"customFields"`
	Entries      []PageEntry            `json:"entries"`
	ID           string                 `json:"id"`
	IsStatic     bool                   `json:"isStatic"`
	IsSystemPage bool                   `json:"isSystemPage"`
	Item         *ItemDetail            `json:"item"`
	Key          *string                `json:"key"`
	List         *ItemList              `json:"list"`
	Metadata     *PageMetadata          `json:"metadata"`
	Path         string                 `json:"path"`
	Template     string                 `json:"template"`
	Themes       []Theme                `json:"themes"`
	Title        string                 `json:"title"`
}
