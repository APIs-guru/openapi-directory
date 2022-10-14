package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAlertHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateAlertRequestBodyAction struct {
	LambdaConfiguration *shared.LambdaConfiguration `json:"LambdaConfiguration,omitempty"`
	SnsConfiguration    *shared.SnsConfiguration    `json:"SNSConfiguration,omitempty"`
}

type CreateAlertRequestBody struct {
	Action                    CreateAlertRequestBodyAction `json:"Action"`
	AlertDescription          *string                      `json:"AlertDescription,omitempty"`
	AlertName                 string                       `json:"AlertName"`
	AlertSensitivityThreshold int64                        `json:"AlertSensitivityThreshold"`
	AnomalyDetectorArn        string                       `json:"AnomalyDetectorArn"`
	Tags                      map[string]string            `json:"Tags,omitempty"`
}

type CreateAlertRequest struct {
	Headers CreateAlertHeaders
	Request CreateAlertRequestBody `request:"mediaType=application/json"`
}

type CreateAlertResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateAlertResponse           *shared.CreateAlertResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	TooManyRequestsException      *interface{}
	ValidationException           *interface{}
}
