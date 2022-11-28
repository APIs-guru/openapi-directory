package shared

type PageStatusEnum string

const (
	PageStatusEnumBuilt    PageStatusEnum = "built"
	PageStatusEnumBuilding PageStatusEnum = "building"
	PageStatusEnumErrored  PageStatusEnum = "errored"
)

// Page
// The configuration for GitHub Pages for a repository.
type Page struct {
	Cname            string                 `json:"cname"`
	Custom404        bool                   `json:"custom_404"`
	HTMLURL          *string                `json:"html_url,omitempty"`
	HTTPSCertificate *PagesHTTPSCertificate `json:"https_certificate,omitempty"`
	HTTPSEnforced    *bool                  `json:"https_enforced,omitempty"`
	Public           bool                   `json:"public"`
	Source           *PagesSourceHash       `json:"source,omitempty"`
	Status           PageStatusEnum         `json:"status"`
	URL              string                 `json:"url"`
}
