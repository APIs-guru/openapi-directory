package operations

import (
	"openapi/pkg/models/shared"
)

type GetAppXAmzTargetEnum string

const (
	GetAppXAmzTargetEnumAwsServerMigrationServiceV20161024GetApp GetAppXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.GetApp"
)

type GetAppHeaders struct {
	XAmzAlgorithm     *string              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string              `header:"name=X-Amz-Credential"`
	XAmzDate          *string              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAppXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAppRequest struct {
	Headers GetAppHeaders
	Request shared.GetAppRequest `request:"mediaType=application/json"`
}

type GetAppResponse struct {
	ContentType                       string
	GetAppResponse                    *shared.GetAppResponse
	InternalError                     *interface{}
	InvalidParameterException         *interface{}
	MissingRequiredParameterException *interface{}
	OperationNotPermittedException    *interface{}
	StatusCode                        int64
	UnauthorizedOperationException    *interface{}
}
