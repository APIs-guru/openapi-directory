package shared

// Page
// Contains details of the fetched page.
type Page struct {
	NextPageToken *string       `json:"NextPageToken,omitempty"`
	Values        []ValueHolder `json:"Values,omitempty"`
}
