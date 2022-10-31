package shared

type ContentSubmoduleLinks struct {
	Git  string `json:"git"`
	HTML string `json:"html"`
	Self string `json:"self"`
}

type ContentSubmodule struct {
	Links           ContentSubmoduleLinks `json:"_links"`
	DownloadURL     string                `json:"download_url"`
	GitURL          string                `json:"git_url"`
	HTMLURL         string                `json:"html_url"`
	Name            string                `json:"name"`
	Path            string                `json:"path"`
	Sha             string                `json:"sha"`
	Size            int64                 `json:"size"`
	SubmoduleGitURL string                `json:"submodule_git_url"`
	Type            string                `json:"type"`
	URL             string                `json:"url"`
}
