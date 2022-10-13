package operations

import (
	"openapi/pkg/models/shared"
)

type CreateHitxAmzTargetEnum string

const (
	CreateHitxAmzTargetEnumMTurkRequesterServiceV20170117CreateHit CreateHitxAmzTargetEnum = "MTurkRequesterServiceV20170117.CreateHIT"
)

type CreateHitHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateHitxAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateHitRequest struct {
	Headers CreateHitHeaders
	Request shared.CreateHitRequest `request:"mediaType=application/json"`
}

type CreateHitResponse struct {
	ContentType       string
	CreateHitResponse *shared.CreateHitResponse
	RequestError      *interface{}
	ServiceFault      *interface{}
	StatusCode        int64
}
