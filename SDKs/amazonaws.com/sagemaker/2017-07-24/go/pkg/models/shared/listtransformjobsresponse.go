package shared



type ListTransformJobsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    TransformJobSummaries []TransformJobSummary `json:"TransformJobSummaries"`
    
}

