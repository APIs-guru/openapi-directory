package operations

import (
	"openapi/pkg/models/shared"
)

type GetHitxAmzTargetEnum string

const (
	GetHitxAmzTargetEnumMTurkRequesterServiceV20170117GetHit GetHitxAmzTargetEnum = "MTurkRequesterServiceV20170117.GetHIT"
)

type GetHitHeaders struct {
	XAmzAlgorithm     *string              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string              `header:"name=X-Amz-Credential"`
	XAmzDate          *string              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetHitxAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetHitRequest struct {
	Headers GetHitHeaders
	Request shared.GetHitRequest `request:"mediaType=application/json"`
}

type GetHitResponse struct {
	ContentType    string
	GetHitResponse *shared.GetHitResponse
	RequestError   *interface{}
	ServiceFault   *interface{}
	StatusCode     int64
}
