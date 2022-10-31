package shared



type StartDataIngestionJobRequest struct {
    ClientToken string `json:"ClientToken"`
    DatasetName string `json:"DatasetName"`
    IngestionInputConfiguration IngestionInputConfiguration `json:"IngestionInputConfiguration"`
    RoleArn string `json:"RoleArn"`
    
}

