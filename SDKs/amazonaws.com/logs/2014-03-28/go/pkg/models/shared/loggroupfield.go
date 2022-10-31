package shared

type LogGroupField struct {
	Name    *string `json:"name,omitempty"`
	Percent *int64  `json:"percent,omitempty"`
}
