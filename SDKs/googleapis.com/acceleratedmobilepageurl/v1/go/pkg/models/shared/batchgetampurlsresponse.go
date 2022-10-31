package shared



type BatchGetAmpUrlsResponse struct {
    AmpUrls []AmpURL `json:"ampUrls,omitempty"`
    URLErrors []AmpURLError `json:"urlErrors,omitempty"`
    
}

