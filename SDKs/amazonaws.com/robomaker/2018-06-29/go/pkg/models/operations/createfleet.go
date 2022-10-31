package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFleetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateFleetRequestBody struct {
	Name string            `json:"name"`
	Tags map[string]string `json:"tags,omitempty"`
}

type CreateFleetRequest struct {
	Headers CreateFleetHeaders
	Request CreateFleetRequestBody `request:"mediaType=application/json"`
}

type CreateFleetResponse struct {
	ContentType               string
	CreateFleetResponse       *shared.CreateFleetResponse
	InternalServerException   *interface{}
	InvalidParameterException *interface{}
	LimitExceededException    *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
