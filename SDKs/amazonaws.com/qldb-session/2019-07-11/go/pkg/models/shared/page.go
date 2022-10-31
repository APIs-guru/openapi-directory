package shared

type Page struct {
	NextPageToken *string       `json:"NextPageToken,omitempty"`
	Values        []ValueHolder `json:"Values,omitempty"`
}
