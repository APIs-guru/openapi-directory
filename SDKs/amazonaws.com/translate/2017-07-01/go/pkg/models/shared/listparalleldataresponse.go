package shared



type ListParallelDataResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    ParallelDataPropertiesList []ParallelDataProperties `json:"ParallelDataPropertiesList,omitempty"`
    
}

