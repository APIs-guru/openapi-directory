package shared

type Conference struct {
	Abbreviation *string `json:"abbreviation,omitempty"`
	ID           *int64  `json:"id,omitempty"`
	Name         *string `json:"name,omitempty"`
	ShortName    *string `json:"short_name,omitempty"`
}
