package shared



type ContentDirectoryLinks struct {
    Git string `json:"git"`
    HTML string `json:"html"`
    Self string `json:"self"`
    
}

type ContentDirectory struct {
    Links ContentDirectoryLinks `json:"_links"`
    Content *string `json:"content,omitempty"`
    DownloadURL string `json:"download_url"`
    GitURL string `json:"git_url"`
    HTMLURL string `json:"html_url"`
    Name string `json:"name"`
    Path string `json:"path"`
    Sha string `json:"sha"`
    Size int64 `json:"size"`
    Type string `json:"type"`
    URL string `json:"url"`
    
}

