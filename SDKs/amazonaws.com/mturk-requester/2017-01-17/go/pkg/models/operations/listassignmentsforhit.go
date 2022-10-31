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
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAssignmentsForHitxAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
