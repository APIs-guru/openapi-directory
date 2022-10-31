package shared

import (
"time")

type DescribeAlgorithmOutput struct {
    AlgorithmArn string `json:"AlgorithmArn"`
    AlgorithmDescription *string `json:"AlgorithmDescription,omitempty"`
    AlgorithmName string `json:"AlgorithmName"`
    AlgorithmStatus AlgorithmStatusEnum `json:"AlgorithmStatus"`
    AlgorithmStatusDetails AlgorithmStatusDetails `json:"AlgorithmStatusDetails"`
    CertifyForMarketplace *bool `json:"CertifyForMarketplace,omitempty"`
    CreationTime time.Time `json:"CreationTime"`
    InferenceSpecification *InferenceSpecification `json:"InferenceSpecification,omitempty"`
    ProductID *string `json:"ProductId,omitempty"`
    TrainingSpecification TrainingSpecification `json:"TrainingSpecification"`
    ValidationSpecification *AlgorithmValidationSpecification `json:"ValidationSpecification,omitempty"`
    
}

