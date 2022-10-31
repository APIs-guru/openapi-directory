package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateExpirationForHitxAmzTargetEnum string

const (
	UpdateExpirationForHitxAmzTargetEnumMTurkRequesterServiceV20170117UpdateExpirationForHit UpdateExpirationForHitxAmzTargetEnum = "MTurkRequesterServiceV20170117.UpdateExpirationForHIT"
)

type UpdateExpirationForHitHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateExpirationForHitxAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateExpirationForHitRequest struct {
	Headers UpdateExpirationForHitHeaders
	Request shared.UpdateExpirationForHitRequest `request:"mediaType=application/json"`
}

type UpdateExpirationForHitResponse struct {
	ContentType                    string
	RequestError                   *interface{}
	ServiceFault                   *interface{}
	StatusCode                     int64
	UpdateExpirationForHitResponse map[string]interface{}
}
