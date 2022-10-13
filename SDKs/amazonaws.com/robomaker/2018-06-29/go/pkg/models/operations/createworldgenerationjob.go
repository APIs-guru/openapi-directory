package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorldGenerationJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateWorldGenerationJobRequestBodyWorldCount struct {
	FloorplanCount            *int64 `json:"floorplanCount"`
	InteriorCountPerFloorplan *int64 `json:"interiorCountPerFloorplan"`
}

type CreateWorldGenerationJobRequestBody struct {
	ClientRequestToken *string                                       `json:"clientRequestToken"`
	Tags               map[string]string                             `json:"tags"`
	Template           string                                        `json:"template"`
	WorldCount         CreateWorldGenerationJobRequestBodyWorldCount `json:"worldCount"`
	WorldTags          map[string]string                             `json:"worldTags"`
}

type CreateWorldGenerationJobRequest struct {
	Headers CreateWorldGenerationJobHeaders
	Request CreateWorldGenerationJobRequestBody `request:"mediaType=application/json"`
}

type CreateWorldGenerationJobResponse struct {
	ContentType                          string
	CreateWorldGenerationJobResponse     *shared.CreateWorldGenerationJobResponse
	IdempotentParameterMismatchException *interface{}
	InternalServerException              *interface{}
	InvalidParameterException            *interface{}
	LimitExceededException               *interface{}
	ResourceNotFoundException            *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
}
