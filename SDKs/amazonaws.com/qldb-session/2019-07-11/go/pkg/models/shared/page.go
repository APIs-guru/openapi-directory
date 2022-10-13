package shared

type Page struct {
	NextPageToken *string       `json:"NextPageToken"`
	Values        []ValueHolder `json:"Values"`
}
