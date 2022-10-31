package operations

import (
	"openapi/pkg/models/shared"
)

type ListIPSetsXAmzTargetEnum string

const (
	ListIPSetsXAmzTargetEnumAwswafRegional20161128ListIPSets ListIPSetsXAmzTargetEnum = "AWSWAF_Regional_20161128.ListIPSets"
)

type ListIPSetsHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListIPSetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListIPSetsRequest struct {
	Headers ListIPSetsHeaders
	Request shared.ListIPSetsRequest `request:"mediaType=application/json"`
}

type ListIPSetsResponse struct {
	ContentType                string
	ListIPSetsResponse         *shared.ListIPSetsResponse
	StatusCode                 int64
	WafInternalErrorException  *interface{}
	WafInvalidAccountException *interface{}
}
