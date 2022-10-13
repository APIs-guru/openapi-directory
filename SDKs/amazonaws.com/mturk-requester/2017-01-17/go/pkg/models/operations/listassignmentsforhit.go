package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssignmentsForHitQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAssignmentsForHitxAmzTargetEnum string

const (
	ListAssignmentsForHitxAmzTargetEnumMTurkRequesterServiceV20170117ListAssignmentsForHit ListAssignmentsForHitxAmzTargetEnum = "MTurkRequesterServiceV20170117.ListAssignmentsForHIT"
)

type ListAssignmentsForHitHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAssignmentsForHitxAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAssignmentsForHitRequest struct {
	QueryParams ListAssignmentsForHitQueryParams
	Headers     ListAssignmentsForHitHeaders
	Request     shared.ListAssignmentsForHitRequest `request:"mediaType=application/json"`
}

type ListAssignmentsForHitResponse struct {
	ContentType                   string
	ListAssignmentsForHitResponse *shared.ListAssignmentsForHitResponse
	RequestError                  *interface{}
	ServiceFault                  *interface{}
	StatusCode                    int64
}
