package shared



type ListResultEstimationDetailsAPIModel struct {
    Count *int32 `json:"Count,omitempty"`
    ErrorMessages []IErrorInfo `json:"ErrorMessages,omitempty"`
    IsFaulted *bool `json:"IsFaulted,omitempty"`
    Result []EstimationDetailsAPIModel `json:"Result,omitempty"`
    TotalCount *int32 `json:"TotalCount,omitempty"`
    
}

