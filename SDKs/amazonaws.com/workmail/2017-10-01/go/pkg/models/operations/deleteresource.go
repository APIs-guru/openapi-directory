package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteResourceXAmzTargetEnum string

const (
	DeleteResourceXAmzTargetEnumWorkMailServiceDeleteResource DeleteResourceXAmzTargetEnum = "WorkMailService.DeleteResource"
)

type DeleteResourceHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
