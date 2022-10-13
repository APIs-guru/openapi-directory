package operations

import (
	"openapi/pkg/models/shared"
)

type UntagResourcesXAmzTargetEnum string

const (
	UntagResourcesXAmzTargetEnumResourceGroupsTaggingApi20170126UntagResources UntagResourcesXAmzTargetEnum = "ResourceGroupsTaggingAPI_20170126.UntagResources"
)

type UntagResourcesHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UntagResourcesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UntagResourcesRequest struct {
	Headers UntagResourcesHeaders
	Request shared.UntagResourcesInput `request:"mediaType=application/json"`
}

type UntagResourcesResponse struct {
	ContentType               string
	InternalServiceException  *interface{}
	InvalidParameterException *interface{}
	StatusCode                int64
	ThrottledException        *interface{}
	UntagResourcesOutput      *shared.UntagResourcesOutput
}
