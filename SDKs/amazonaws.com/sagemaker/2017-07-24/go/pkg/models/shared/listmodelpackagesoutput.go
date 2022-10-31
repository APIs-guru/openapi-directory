package shared



type ListModelPackagesOutput struct {
    ModelPackageSummaryList []ModelPackageSummary `json:"ModelPackageSummaryList"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

