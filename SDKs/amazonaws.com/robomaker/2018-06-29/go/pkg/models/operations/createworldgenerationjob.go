package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorldGenerationJobHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateWorldGenerationJobRequestBodyWorldCount struct {
	FloorplanCount            *int64 `json:"floorplanCount,omitempty"`
	InteriorCountPerFloorplan *int64 `json:"interiorCountPerFloorplan,omitempty"`
}

type CreateWorldGenerationJobRequestBody struct {
	ClientRequestToken *string                                       `json:"clientRequestToken,omitempty"`
	Tags               map[string]string                             `json:"tags,omitempty"`
	Template           string                                        `json:"template"`
	WorldCount         CreateWorldGenerationJobRequestBodyWorldCount `json:"worldCount"`
	WorldTags          map[string]string                             `json:"worldTags,omitempty"`
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
