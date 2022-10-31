package operations

import (
	"openapi/pkg/models/shared"
)

type GetContainerServicePowersXAmzTargetEnum string

const (
	GetContainerServicePowersXAmzTargetEnumLightsail20161128GetContainerServicePowers GetContainerServicePowersXAmzTargetEnum = "Lightsail_20161128.GetContainerServicePowers"
)

type GetContainerServicePowersHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetContainerServicePowersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetContainerServicePowersRequest struct {
	Headers GetContainerServicePowersHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetContainerServicePowersResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	GetContainerServicePowersResult *shared.GetContainerServicePowersResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
