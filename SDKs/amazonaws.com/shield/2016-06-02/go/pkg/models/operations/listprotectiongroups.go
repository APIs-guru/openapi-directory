package operations

import (
	"openapi/pkg/models/shared"
)

type ListProtectionGroupsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListProtectionGroupsXAmzTargetEnum string

const (
	ListProtectionGroupsXAmzTargetEnumAwsShield20160616ListProtectionGroups ListProtectionGroupsXAmzTargetEnum = "AWSShield_20160616.ListProtectionGroups"
)

type ListProtectionGroupsHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListProtectionGroupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListProtectionGroupsRequest struct {
	QueryParams ListProtectionGroupsQueryParams
	Headers     ListProtectionGroupsHeaders
	Request     shared.ListProtectionGroupsRequest `request:"mediaType=application/json"`
}

type ListProtectionGroupsResponse struct {
	ContentType                     string
	InternalErrorException          *interface{}
	InvalidPaginationTokenException *interface{}
	ListProtectionGroupsResponse    *shared.ListProtectionGroupsResponse
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
