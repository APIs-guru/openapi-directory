package operations

import (
	"openapi/pkg/models/shared"
)

type GetContainerServiceDeploymentsXAmzTargetEnum string

const (
	GetContainerServiceDeploymentsXAmzTargetEnumLightsail20161128GetContainerServiceDeployments GetContainerServiceDeploymentsXAmzTargetEnum = "Lightsail_20161128.GetContainerServiceDeployments"
)

type GetContainerServiceDeploymentsHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetContainerServiceDeploymentsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetContainerServiceDeploymentsRequest struct {
	Headers GetContainerServiceDeploymentsHeaders
	Request shared.GetContainerServiceDeploymentsRequest `request:"mediaType=application/json"`
}

type GetContainerServiceDeploymentsResponse struct {
	AccessDeniedException                *interface{}
	ContentType                          string
	GetContainerServiceDeploymentsResult *shared.GetContainerServiceDeploymentsResult
	InvalidInputException                *interface{}
	NotFoundException                    *interface{}
	ServiceException                     *interface{}
	StatusCode                           int64
	UnauthenticatedException             *interface{}
}
