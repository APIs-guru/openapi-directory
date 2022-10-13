package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateHitTypeOfHitxAmzTargetEnum string

const (
	UpdateHitTypeOfHitxAmzTargetEnumMTurkRequesterServiceV20170117UpdateHitTypeOfHit UpdateHitTypeOfHitxAmzTargetEnum = "MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT"
)

type UpdateHitTypeOfHitHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateHitTypeOfHitxAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateHitTypeOfHitRequest struct {
	Headers UpdateHitTypeOfHitHeaders
	Request shared.UpdateHitTypeOfHitRequest `request:"mediaType=application/json"`
}

type UpdateHitTypeOfHitResponse struct {
	ContentType                string
	RequestError               *interface{}
	ServiceFault               *interface{}
	StatusCode                 int64
	UpdateHitTypeOfHitResponse map[string]interface{}
}
