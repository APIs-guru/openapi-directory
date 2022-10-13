package shared

type NavEntry struct {
	Children     []NavEntry             `json:"children"`
	Content      *NavContent            `json:"content"`
	CustomFields map[string]interface{} `json:"customFields"`
	Depth        int32                  `json:"depth"`
	Featured     *bool                  `json:"featured"`
	Icon         *string                `json:"icon"`
	Label        *string                `json:"label"`
	Path         *string                `json:"path"`
}
