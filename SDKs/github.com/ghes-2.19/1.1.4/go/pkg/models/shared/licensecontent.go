package shared

type LicenseContentLinks struct {
	Git  string `json:"git"`
	HTML string `json:"html"`
	Self string `json:"self"`
}

type LicenseContentLicenseSimple struct {
	HTMLURL *string `json:"html_url,omitempty"`
	Key     string  `json:"key"`
	Name    string  `json:"name"`
	NodeID  string  `json:"node_id"`
	SpdxID  string  `json:"spdx_id"`
	URL     string  `json:"url"`
}

type LicenseContent struct {
	Links       LicenseContentLinks         `json:"_links"`
	Content     string                      `json:"content"`
	DownloadURL string                      `json:"download_url"`
	Encoding    string                      `json:"encoding"`
	GitURL      string                      `json:"git_url"`
	HTMLURL     string                      `json:"html_url"`
	License     LicenseContentLicenseSimple `json:"license"`
	Name        string                      `json:"name"`
	Path        string                      `json:"path"`
	Sha         string                      `json:"sha"`
	Size        int64                       `json:"size"`
	Type        string                      `json:"type"`
	URL         string                      `json:"url"`
}
