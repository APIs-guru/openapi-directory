package shared

type Conference struct {
	Abbreviation *string `json:"abbreviation"`
	ID           *int64  `json:"id"`
	Name         *string `json:"name"`
	ShortName    *string `json:"short_name"`
}
