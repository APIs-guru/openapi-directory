package shared



type SearchSystemTemplatesResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Summaries []SystemTemplateSummary `json:"summaries,omitempty"`
    
}

