package shared

type ContentFileLinks struct {
	Git  string `json:"git"`
	HTML string `json:"html"`
	Self string `json:"self"`
}

type ContentFile struct {
	Links           ContentFileLinks `json:"_links"`
	Content         string           `json:"content"`
	DownloadURL     string           `json:"download_url"`
	Encoding        string           `json:"encoding"`
	GitURL          string           `json:"git_url"`
	HTMLURL         string           `json:"html_url"`
	Name            string           `json:"name"`
	Path            string           `json:"path"`
	Sha             string           `json:"sha"`
	Size            int64            `json:"size"`
	SubmoduleGitURL *string          `json:"submodule_git_url,omitempty"`
	Target          *string          `json:"target,omitempty"`
	Type            string           `json:"type"`
	URL             string           `json:"url"`
}
