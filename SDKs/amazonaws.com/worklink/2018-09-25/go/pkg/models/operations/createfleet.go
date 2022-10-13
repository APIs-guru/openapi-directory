package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFleetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateFleetRequestBody struct {
	DisplayName                *string           `json:"DisplayName"`
	FleetName                  string            `json:"FleetName"`
	OptimizeForEndUserLocation *bool             `json:"OptimizeForEndUserLocation"`
	Tags                       map[string]string `json:"Tags"`
}

type CreateFleetRequest struct {
	Headers CreateFleetHeaders
	Request CreateFleetRequestBody `request:"mediaType=application/json"`
}

type CreateFleetResponse struct {
	ContentType                    string
	CreateFleetResponse            *shared.CreateFleetResponse
	InternalServerErrorException   *interface{}
	InvalidRequestException        *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
	UnauthorizedException          *interface{}
}
