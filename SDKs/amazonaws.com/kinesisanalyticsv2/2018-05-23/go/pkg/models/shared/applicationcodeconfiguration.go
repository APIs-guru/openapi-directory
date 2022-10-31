package shared



type ApplicationCodeConfiguration struct {
    CodeContent *CodeContent `json:"CodeContent,omitempty"`
    CodeContentType CodeContentTypeEnum `json:"CodeContentType"`
    
}

