package shared



type BatchPredictOutputConfig struct {
    BigqueryDestination *BigQueryDestination `json:"bigqueryDestination,omitempty"`
    GcsDestination *GcsDestination `json:"gcsDestination,omitempty"`
    
}

