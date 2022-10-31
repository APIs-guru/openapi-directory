package operations

import (
	"openapi/pkg/models/shared"
)

type GetServiceXAmzTargetEnum string

const (
	GetServiceXAmzTargetEnumAwsProton20200720GetService GetServiceXAmzTargetEnum = "AwsProton20200720.GetService"
)

type GetServiceHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetServiceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetServiceRequest struct {
	Headers GetServiceHeaders
	Request shared.GetServiceInput `request:"mediaType=application/json"`
}

type GetServiceResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetServiceOutput          *shared.GetServiceOutput
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
