package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainsXAmzTargetEnum string

const (
	GetDomainsXAmzTargetEnumLightsail20161128GetDomains GetDomainsXAmzTargetEnum = "Lightsail_20161128.GetDomains"
)

type GetDomainsHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDomainsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetDomainsRequest struct {
	Headers GetDomainsHeaders
	Request shared.GetDomainsRequest `request:"mediaType=application/json"`
}

type GetDomainsResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetDomainsResult                *shared.GetDomainsResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
