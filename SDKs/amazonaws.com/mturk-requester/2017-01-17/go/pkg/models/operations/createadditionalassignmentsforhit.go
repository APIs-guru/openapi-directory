package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAdditionalAssignmentsForHitxAmzTargetEnum string

const (
	CreateAdditionalAssignmentsForHitxAmzTargetEnumMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHit CreateAdditionalAssignmentsForHitxAmzTargetEnum = "MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT"
)

type CreateAdditionalAssignmentsForHitHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAdditionalAssignmentsForHitxAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateAdditionalAssignmentsForHitRequest struct {
	Headers CreateAdditionalAssignmentsForHitHeaders
	Request shared.CreateAdditionalAssignmentsForHitRequest `request:"mediaType=application/json"`
}

type CreateAdditionalAssignmentsForHitResponse struct {
	ContentType                               string
	CreateAdditionalAssignmentsForHitResponse map[string]interface{}
	RequestError                              *interface{}
	ServiceFault                              *interface{}
	StatusCode                                int64
}
