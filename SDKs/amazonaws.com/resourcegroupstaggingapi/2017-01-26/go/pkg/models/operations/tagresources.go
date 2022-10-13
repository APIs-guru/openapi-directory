package operations

import (
	"openapi/pkg/models/shared"
)

type TagResourcesXAmzTargetEnum string

const (
	TagResourcesXAmzTargetEnumResourceGroupsTaggingApi20170126TagResources TagResourcesXAmzTargetEnum = "ResourceGroupsTaggingAPI_20170126.TagResources"
)

type TagResourcesHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TagResourcesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TagResourcesRequest struct {
	Headers TagResourcesHeaders
	Request shared.TagResourcesInput `request:"mediaType=application/json"`
}

type TagResourcesResponse struct {
	ContentType               string
	InternalServiceException  *interface{}
	InvalidParameterException *interface{}
	StatusCode                int64
	TagResourcesOutput        *shared.TagResourcesOutput
	ThrottledException        *interface{}
}
