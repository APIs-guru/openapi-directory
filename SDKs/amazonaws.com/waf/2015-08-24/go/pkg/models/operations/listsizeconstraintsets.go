package operations

import (
	"openapi/pkg/models/shared"
)

type ListSizeConstraintSetsXAmzTargetEnum string

const (
	ListSizeConstraintSetsXAmzTargetEnumAwswaf20150824ListSizeConstraintSets ListSizeConstraintSetsXAmzTargetEnum = "AWSWAF_20150824.ListSizeConstraintSets"
)

type ListSizeConstraintSetsHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSizeConstraintSetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
