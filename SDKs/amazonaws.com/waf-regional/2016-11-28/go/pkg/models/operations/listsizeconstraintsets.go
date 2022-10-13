package operations

import (
	"openapi/pkg/models/shared"
)

type ListSizeConstraintSetsXAmzTargetEnum string

const (
	ListSizeConstraintSetsXAmzTargetEnumAwswafRegional20161128ListSizeConstraintSets ListSizeConstraintSetsXAmzTargetEnum = "AWSWAF_Regional_20161128.ListSizeConstraintSets"
)

type ListSizeConstraintSetsHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSizeConstraintSetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListSizeConstraintSetsRequest struct {
	Headers ListSizeConstraintSetsHeaders
	Request shared.ListSizeConstraintSetsRequest `request:"mediaType=application/json"`
}

type ListSizeConstraintSetsResponse struct {
	ContentType                    string
	ListSizeConstraintSetsResponse *shared.ListSizeConstraintSetsResponse
	StatusCode                     int64
	WafInternalErrorException      *interface{}
	WafInvalidAccountException     *interface{}
}
