package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetCustomDataIdentifiersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type BatchGetCustomDataIdentifiersRequestBody struct {
	Ids []string `json:"ids,omitempty"`
}

type BatchGetCustomDataIdentifiersRequest struct {
	Headers BatchGetCustomDataIdentifiersHeaders
	Request BatchGetCustomDataIdentifiersRequestBody `request:"mediaType=application/json"`
}

type BatchGetCustomDataIdentifiersResponse struct {
	AccessDeniedException                 *interface{}
	BatchGetCustomDataIdentifiersResponse *shared.BatchGetCustomDataIdentifiersResponse
	ConflictException                     *interface{}
	ContentType                           string
	InternalServerException               *interface{}
	ResourceNotFoundException             *interface{}
	ServiceQuotaExceededException         *interface{}
	StatusCode                            int64
	ThrottlingException                   *interface{}
	ValidationException                   *interface{}
}
