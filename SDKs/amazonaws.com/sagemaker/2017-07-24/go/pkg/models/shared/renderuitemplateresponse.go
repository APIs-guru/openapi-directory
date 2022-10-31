package shared



type RenderUITemplateResponse struct {
    Errors []RenderingError `json:"Errors"`
    RenderedContent string `json:"RenderedContent"`
    
}

