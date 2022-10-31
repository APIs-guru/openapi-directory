package operations



type MarkdownRenderRawRequests struct {
    String *string `request:"mediaType=text/plain"`
    String1 *string `request:"mediaType=text/x-markdown"`
    
}

type MarkdownRenderRawRequest struct {
    Request *MarkdownRenderRawRequests 
    
}

type MarkdownRenderRawResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    MarkdownRenderRaw200TextHTMLString *string 
    
}

