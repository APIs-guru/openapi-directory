package operations

import (
	"openapi/pkg/models/shared"
)

type CreateHitTypeXAmzTargetEnum string

const (
	CreateHitTypeXAmzTargetEnumMTurkRequesterServiceV20170117CreateHitType CreateHitTypeXAmzTargetEnum = "MTurkRequesterServiceV20170117.CreateHITType"
)

type CreateHitTypeHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateHitTypeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateHitTypeRequest struct {
	Headers CreateHitTypeHeaders
	Request shared.CreateHitTypeRequest `request:"mediaType=application/json"`
}

type CreateHitTypeResponse struct {
	ContentType           string
	CreateHitTypeResponse *shared.CreateHitTypeResponse
	RequestError          *interface{}
	ServiceFault          *interface{}
	StatusCode            int64
}
