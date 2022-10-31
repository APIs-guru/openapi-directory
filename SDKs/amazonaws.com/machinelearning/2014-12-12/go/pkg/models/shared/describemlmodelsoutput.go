package shared



type DescribeMlModelsOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    Results []MlModel `json:"Results,omitempty"`
    
}

