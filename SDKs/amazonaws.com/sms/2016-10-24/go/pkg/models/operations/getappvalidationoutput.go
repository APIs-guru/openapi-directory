package operations

import (
	"openapi/pkg/models/shared"
)

type GetAppValidationOutputXAmzTargetEnum string

const (
	GetAppValidationOutputXAmzTargetEnumAwsServerMigrationServiceV20161024GetAppValidationOutput GetAppValidationOutputXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.GetAppValidationOutput"
)

type GetAppValidationOutputHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAppValidationOutputXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetAppValidationOutputRequest struct {
	Headers GetAppValidationOutputHeaders
	Request shared.GetAppValidationOutputRequest `request:"mediaType=application/json"`
}

type GetAppValidationOutputResponse struct {
	ContentType                       string
	GetAppValidationOutputResponse    *shared.GetAppValidationOutputResponse
	InternalError                     *interface{}
	InvalidParameterException         *interface{}
	MissingRequiredParameterException *interface{}
	OperationNotPermittedException    *interface{}
	StatusCode                        int64
	UnauthorizedOperationException    *interface{}
}
