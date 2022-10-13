package operations

import (
	"openapi/pkg/models/shared"
)

type ListAliasesQueryParams struct {
	Limit  *string `queryParam:"style=form,explode=true,name=Limit"`
	Marker *string `queryParam:"style=form,explode=true,name=Marker"`
}

type ListAliasesXAmzTargetEnum string

const (
	ListAliasesXAmzTargetEnumTrentServiceListAliases ListAliasesXAmzTargetEnum = "TrentService.ListAliases"
)

type ListAliasesHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAliasesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAliasesRequest struct {
	QueryParams ListAliasesQueryParams
	Headers     ListAliasesHeaders
	Request     shared.ListAliasesRequest `request:"mediaType=application/json"`
}

type ListAliasesResponse struct {
	ContentType                string
	DependencyTimeoutException *interface{}
	InvalidArnException        *interface{}
	InvalidMarkerException     *interface{}
	KmsInternalException       *interface{}
	ListAliasesResponse        *shared.ListAliasesResponse
	NotFoundException          *interface{}
	StatusCode                 int64
}
