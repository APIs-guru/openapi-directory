package shared



type Preview struct {
    Fallback *string `json:"fallback,omitempty"`
    Footer *string `json:"footer,omitempty"`
    Header *string `json:"header,omitempty"`
    HeaderLink *string `json:"header_link,omitempty"`
    HTMLText *string `json:"html_text,omitempty"`
    Text *string `json:"text,omitempty"`
    Title *string `json:"title,omitempty"`
    TitleLink *string `json:"title_link,omitempty"`
    
}

