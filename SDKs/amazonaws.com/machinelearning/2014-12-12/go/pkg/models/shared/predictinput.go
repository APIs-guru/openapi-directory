package shared



type PredictInput struct {
    MlModelID string `json:"MLModelId"`
    PredictEndpoint string `json:"PredictEndpoint"`
    Record map[string]string `json:"Record"`
    
}

