package shared



type CreateFilterRequest struct {
    DatasetGroupArn string `json:"datasetGroupArn"`
    FilterExpression string `json:"filterExpression"`
    Name string `json:"name"`
    
}

