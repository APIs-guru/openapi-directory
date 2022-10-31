package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAnomalyDetectorHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig struct {
	AnomalyDetectorFrequency *shared.FrequencyEnum `json:"AnomalyDetectorFrequency,omitempty"`
}

type CreateAnomalyDetectorRequestBody struct {
	AnomalyDetectorConfig      CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig `json:"AnomalyDetectorConfig"`
	AnomalyDetectorDescription *string                                               `json:"AnomalyDetectorDescription,omitempty"`
	AnomalyDetectorName        string                                                `json:"AnomalyDetectorName"`
	KmsKeyArn                  *string                                               `json:"KmsKeyArn,omitempty"`
	Tags                       map[string]string                                     `json:"Tags,omitempty"`
}

type CreateAnomalyDetectorRequest struct {
	Headers CreateAnomalyDetectorHeaders
	Request CreateAnomalyDetectorRequestBody `request:"mediaType=application/json"`
}

type CreateAnomalyDetectorResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateAnomalyDetectorResponse *shared.CreateAnomalyDetectorResponse
	InternalServerException       *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	TooManyRequestsException      *interface{}
	ValidationException           *interface{}
}
