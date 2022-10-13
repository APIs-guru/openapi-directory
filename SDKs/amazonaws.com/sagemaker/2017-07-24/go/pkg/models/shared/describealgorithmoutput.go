package shared

import (
	"time"
)

type DescribeAlgorithmOutput struct {
	AlgorithmArn            string                            `json:"AlgorithmArn"`
	AlgorithmDescription    *string                           `json:"AlgorithmDescription"`
	AlgorithmName           string                            `json:"AlgorithmName"`
	AlgorithmStatus         AlgorithmStatusEnum               `json:"AlgorithmStatus"`
	AlgorithmStatusDetails  AlgorithmStatusDetails            `json:"AlgorithmStatusDetails"`
	CertifyForMarketplace   *bool                             `json:"CertifyForMarketplace"`
	CreationTime            time.Time                         `json:"CreationTime"`
	InferenceSpecification  *InferenceSpecification           `json:"InferenceSpecification"`
	ProductID               *string                           `json:"ProductId"`
	TrainingSpecification   TrainingSpecification             `json:"TrainingSpecification"`
	ValidationSpecification *AlgorithmValidationSpecification `json:"ValidationSpecification"`
}
