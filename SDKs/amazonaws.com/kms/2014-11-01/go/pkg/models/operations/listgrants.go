package operations

import (
	"openapi/pkg/models/shared"
)

type ListGrantsQueryParams struct {
	Limit  *string `queryParam:"style=form,explode=true,name=Limit"`
	Marker *string `queryParam:"style=form,explode=true,name=Marker"`
}

type ListGrantsXAmzTargetEnum string

const (
	ListGrantsXAmzTargetEnumTrentServiceListGrants ListGrantsXAmzTargetEnum = "TrentService.ListGrants"
)

type ListGrantsHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListGrantsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListGrantsRequest struct {
	QueryParams ListGrantsQueryParams
	Headers     ListGrantsHeaders
	Request     shared.ListGrantsRequest `request:"mediaType=application/json"`
}

type ListGrantsResponse struct {
	ContentType                string
	DependencyTimeoutException *interface{}
	InvalidArnException        *interface{}
	InvalidGrantIDException    *interface{}
	InvalidMarkerException     *interface{}
	KmsInternalException       *interface{}
	KmsInvalidStateException   *interface{}
	ListGrantsResponse         *shared.ListGrantsResponse
	NotFoundException          *interface{}
	StatusCode                 int64
}
