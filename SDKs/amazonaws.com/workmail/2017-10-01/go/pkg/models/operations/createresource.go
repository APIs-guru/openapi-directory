package operations

import (
	"openapi/pkg/models/shared"
)

type CreateResourceXAmzTargetEnum string

const (
	CreateResourceXAmzTargetEnumWorkMailServiceCreateResource CreateResourceXAmzTargetEnum = "WorkMailService.CreateResource"
)

type CreateResourceHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateResourceRequest struct {
	Headers CreateResourceHeaders
	Request shared.CreateResourceRequest `request:"mediaType=application/json"`
}

type CreateResourceResponse struct {
	ContentType                                   string
	CreateResourceResponse                        *shared.CreateResourceResponse
	DirectoryServiceAuthenticationFailedException *interface{}
	DirectoryUnavailableException                 *interface{}
	InvalidParameterException                     *interface{}
	NameAvailabilityException                     *interface{}
	OrganizationNotFoundException                 *interface{}
	OrganizationStateException                    *interface{}
	ReservedNameException                         *interface{}
	StatusCode                                    int64
}
