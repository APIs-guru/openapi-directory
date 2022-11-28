package shared

// PageviewData
// Represents details collected when the visitor views a page.
type PageviewData struct {
	PagePath  *string `json:"pagePath,omitempty"`
	PageTitle *string `json:"pageTitle,omitempty"`
}
