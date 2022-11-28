package shared

type ContentSymlinkLinks struct {
	Git  string `json:"git"`
	HTML string `json:"html"`
	Self string `json:"self"`
}

// ContentSymlink
// An object describing a symlink
type ContentSymlink struct {
	Links       ContentSymlinkLinks `json:"_links"`
	DownloadURL string              `json:"download_url"`
	GitURL      string              `json:"git_url"`
	HTMLURL     string              `json:"html_url"`
	Name        string              `json:"name"`
	Path        string              `json:"path"`
	Sha         string              `json:"sha"`
	Size        int64               `json:"size"`
	Target      string              `json:"target"`
	Type        string              `json:"type"`
	URL         string              `json:"url"`
}
