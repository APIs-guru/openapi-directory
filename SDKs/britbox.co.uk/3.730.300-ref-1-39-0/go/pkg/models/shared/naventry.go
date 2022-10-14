package shared

type NavEntry struct {
	Children     []NavEntry             `json:"children,omitempty"`
	Content      *NavContent            `json:"content,omitempty"`
	CustomFields map[string]interface{} `json:"customFields,omitempty"`
	Depth        int32                  `json:"depth"`
	Featured     *bool                  `json:"featured,omitempty"`
	Icon         *string                `json:"icon,omitempty"`
	Label        *string                `json:"label,omitempty"`
	Path         *string                `json:"path,omitempty"`
}
