package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourcesQueryParams struct {
	PaginationToken  *string `queryParam:"style=form,explode=true,name=PaginationToken"`
	ResourcesPerPage *string `queryParam:"style=form,explode=true,name=ResourcesPerPage"`
}

type GetResourcesXAmzTargetEnum string

const (
	GetResourcesXAmzTargetEnumResourceGroupsTaggingApi20170126GetResources GetResourcesXAmzTargetEnum = "ResourceGroupsTaggingAPI_20170126.GetResources"
)

type GetResourcesHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetResourcesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetResourcesRequest struct {
	QueryParams GetResourcesQueryParams
	Headers     GetResourcesHeaders
	Request     shared.GetResourcesInput `request:"mediaType=application/json"`
}

type GetResourcesResponse struct {
	ContentType                     string
	GetResourcesOutput              *shared.GetResourcesOutput
	InternalServiceException        *interface{}
	InvalidParameterException       *interface{}
	PaginationTokenExpiredException *interface{}
	StatusCode                      int64
	ThrottledException              *interface{}
}
