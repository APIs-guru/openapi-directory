package shared



type CreateBatchPredictionInput struct {
    BatchPredictionDataSourceID string `json:"BatchPredictionDataSourceId"`
    BatchPredictionID string `json:"BatchPredictionId"`
    BatchPredictionName *string `json:"BatchPredictionName,omitempty"`
    MlModelID string `json:"MLModelId"`
    OutputURI string `json:"OutputUri"`
    
}

