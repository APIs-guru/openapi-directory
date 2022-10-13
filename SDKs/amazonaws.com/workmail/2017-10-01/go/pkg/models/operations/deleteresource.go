package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteResourceXAmzTargetEnum string

const (
	DeleteResourceXAmzTargetEnumWorkMailServiceDeleteResource DeleteResourceXAmzTargetEnum = "WorkMailService.DeleteResource"
)

type DeleteResourceHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteResourceRequest struct {
	Headers DeleteResourceHeaders
	Request shared.DeleteResourceRequest `request:"mediaType=application/json"`
}

type DeleteResourceResponse struct {
	ContentType                   string
	DeleteResourceResponse        map[string]interface{}
	EntityStateException          *interface{}
	InvalidParameterException     *interface{}
	OrganizationNotFoundException *interface{}
	OrganizationStateException    *interface{}
	StatusCode                    int64
}
