package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAnomalyDetectorHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig
// Contains information about a detector's configuration.
type UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig struct {
	AnomalyDetectorFrequency *shared.FrequencyEnum `json:"AnomalyDetectorFrequency,omitempty"`
}

type UpdateAnomalyDetectorRequestBody struct {
	AnomalyDetectorArn         string                                                 `json:"AnomalyDetectorArn"`
	AnomalyDetectorConfig      *UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig `json:"AnomalyDetectorConfig,omitempty"`
	AnomalyDetectorDescription *string                                                `json:"AnomalyDetectorDescription,omitempty"`
	KmsKeyArn                  *string                                                `json:"KmsKeyArn,omitempty"`
}

type UpdateAnomalyDetectorRequest struct {
	Headers UpdateAnomalyDetectorHeaders
	Request UpdateAnomalyDetectorRequestBody `request:"mediaType=application/json"`
}

type UpdateAnomalyDetectorResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	TooManyRequestsException      *interface{}
	UpdateAnomalyDetectorResponse *shared.UpdateAnomalyDetectorResponse
	ValidationException           *interface{}
}
