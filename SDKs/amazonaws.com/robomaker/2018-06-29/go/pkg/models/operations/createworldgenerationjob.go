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

// CreateWorldGenerationJobRequestBodyWorldCount
// <p>The number of worlds that will be created. You can configure the number of unique floorplans and the number of unique interiors for each floor plan. For example, if you want 1 world with 20 unique interiors, you set <code>floorplanCount = 1</code> and <code>interiorCountPerFloorplan = 20</code>. This will result in 20 worlds (<code>floorplanCount</code> * <code>interiorCountPerFloorplan)</code>. </p> <p>If you set <code>floorplanCount = 4</code> and <code>interiorCountPerFloorplan = 5</code>, there will be 20 worlds with 5 unique floor plans. </p>
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
