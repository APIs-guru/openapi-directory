package shared

type LicenseSimple struct {
	HTMLURL *string `json:"html_url,omitempty"`
	Key     string  `json:"key"`
	Name    string  `json:"name"`
	NodeID  string  `json:"node_id"`
	SpdxID  string  `json:"spdx_id"`
	URL     string  `json:"url"`
}
