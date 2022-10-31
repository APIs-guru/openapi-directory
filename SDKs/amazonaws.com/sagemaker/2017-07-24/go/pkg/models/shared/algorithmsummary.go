package shared

import (
"time")

type AlgorithmSummary struct {
    AlgorithmArn string `json:"AlgorithmArn"`
    AlgorithmDescription *string `json:"AlgorithmDescription,omitempty"`
    AlgorithmName string `json:"AlgorithmName"`
    AlgorithmStatus AlgorithmStatusEnum `json:"AlgorithmStatus"`
    CreationTime time.Time `json:"CreationTime"`
    
}

