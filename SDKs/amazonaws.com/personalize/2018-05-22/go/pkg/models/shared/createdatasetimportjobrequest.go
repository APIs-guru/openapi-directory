package shared



type CreateDatasetImportJobRequest struct {
    DataSource DataSource `json:"dataSource"`
    DatasetArn string `json:"datasetArn"`
    JobName string `json:"jobName"`
    RoleArn string `json:"roleArn"`
    
}

