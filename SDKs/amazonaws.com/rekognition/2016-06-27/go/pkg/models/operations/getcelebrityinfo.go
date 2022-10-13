package operations

import (
	"openapi/pkg/models/shared"
)

type GetCelebrityInfoXAmzTargetEnum string

const (
	GetCelebrityInfoXAmzTargetEnumRekognitionServiceGetCelebrityInfo GetCelebrityInfoXAmzTargetEnum = "RekognitionService.GetCelebrityInfo"
)

type GetCelebrityInfoHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCelebrityInfoXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetCelebrityInfoRequest struct {
	Headers GetCelebrityInfoHeaders
	Request shared.GetCelebrityInfoRequest `request:"mediaType=application/json"`
}

type GetCelebrityInfoResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	GetCelebrityInfoResponse               *shared.GetCelebrityInfoResponse
	InternalServerError                    *interface{}
	InvalidParameterException              *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
