package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterResourceXAmzTargetEnum string

const (
	RegisterResourceXAmzTargetEnumAwsLakeFormationRegisterResource RegisterResourceXAmzTargetEnum = "AWSLakeFormation.RegisterResource"
)

type RegisterResourceHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RegisterResourceRequest struct {
	Headers RegisterResourceHeaders
	Request shared.RegisterResourceRequest `request:"mediaType=application/json"`
}

type RegisterResourceResponse struct {
	AlreadyExistsException    *interface{}
	ContentType               string
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	RegisterResourceResponse  map[string]interface{}
	StatusCode                int64
}
