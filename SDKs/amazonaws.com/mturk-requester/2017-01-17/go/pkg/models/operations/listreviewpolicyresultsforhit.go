package operations

import (
	"openapi/pkg/models/shared"
)

type ListReviewPolicyResultsForHitQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListReviewPolicyResultsForHitxAmzTargetEnum string

const (
	ListReviewPolicyResultsForHitxAmzTargetEnumMTurkRequesterServiceV20170117ListReviewPolicyResultsForHit ListReviewPolicyResultsForHitxAmzTargetEnum = "MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT"
)

type ListReviewPolicyResultsForHitHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListReviewPolicyResultsForHitxAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListReviewPolicyResultsForHitRequest struct {
	QueryParams ListReviewPolicyResultsForHitQueryParams
	Headers     ListReviewPolicyResultsForHitHeaders
	Request     shared.ListReviewPolicyResultsForHitRequest `request:"mediaType=application/json"`
}

type ListReviewPolicyResultsForHitResponse struct {
	ContentType                           string
	ListReviewPolicyResultsForHitResponse *shared.ListReviewPolicyResultsForHitResponse
	RequestError                          *interface{}
	ServiceFault                          *interface{}
	StatusCode                            int64
}
