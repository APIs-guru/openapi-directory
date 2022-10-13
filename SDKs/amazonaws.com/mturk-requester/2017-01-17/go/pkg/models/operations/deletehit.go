package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteHitxAmzTargetEnum string

const (
	DeleteHitxAmzTargetEnumMTurkRequesterServiceV20170117DeleteHit DeleteHitxAmzTargetEnum = "MTurkRequesterServiceV20170117.DeleteHIT"
)

type DeleteHitHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteHitxAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteHitRequest struct {
	Headers DeleteHitHeaders
	Request shared.DeleteHitRequest `request:"mediaType=application/json"`
}

type DeleteHitResponse struct {
	ContentType       string
	DeleteHitResponse map[string]interface{}
	RequestError      *interface{}
	ServiceFault      *interface{}
	StatusCode        int64
}
