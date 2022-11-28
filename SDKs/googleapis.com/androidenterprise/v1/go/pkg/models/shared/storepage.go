package shared

// StorePage
// Definition of a managed Google Play store page, made of a localized name and links to other pages. A page also contains clusters defined as a subcollection.
type StorePage struct {
	ID   *string         `json:"id,omitempty"`
	Link []string        `json:"link,omitempty"`
	Name []LocalizedText `json:"name,omitempty"`
}
