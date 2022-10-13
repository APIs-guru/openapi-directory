package operations

import (
	"openapi/pkg/models/shared"
)

type ListResourcesInProtectionGroupQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListResourcesInProtectionGroupXAmzTargetEnum string

const (
	ListResourcesInProtectionGroupXAmzTargetEnumAwsShield20160616ListResourcesInProtectionGroup ListResourcesInProtectionGroupXAmzTargetEnum = "AWSShield_20160616.ListResourcesInProtectionGroup"
)

type ListResourcesInProtectionGroupHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListResourcesInProtectionGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListResourcesInProtectionGroupRequest struct {
	QueryParams ListResourcesInProtectionGroupQueryParams
	Headers     ListResourcesInProtectionGroupHeaders
	Request     shared.ListResourcesInProtectionGroupRequest `request:"mediaType=application/json"`
}

type ListResourcesInProtectionGroupResponse struct {
	ContentType                            string
	InternalErrorException                 *interface{}
	InvalidPaginationTokenException        *interface{}
	ListResourcesInProtectionGroupResponse *shared.ListResourcesInProtectionGroupResponse
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
}
