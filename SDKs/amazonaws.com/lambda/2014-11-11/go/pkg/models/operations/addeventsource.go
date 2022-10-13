package operations

import (
	"openapi/pkg/models/shared"
)

type AddEventSourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AddEventSourceRequestBody struct {
	BatchSize    *int64            `json:"BatchSize"`
	EventSource  string            `json:"EventSource"`
	FunctionName string            `json:"FunctionName"`
	Parameters   map[string]string `json:"Parameters"`
	Role         string            `json:"Role"`
}

type AddEventSourceRequest struct {
	Headers AddEventSourceHeaders
	Request AddEventSourceRequestBody `request:"mediaType=application/json"`
}

type AddEventSourceResponse struct {
	ContentType                    string
	EventSourceConfiguration       *shared.EventSourceConfiguration
	InvalidParameterValueException *shared.InvalidParameterValueException
	ServiceException               *shared.ServiceException
	StatusCode                     int64
}
