package operations

import (
	"openapi/pkg/models/shared"
)

type ListAppsXAmzTargetEnum string

const (
	ListAppsXAmzTargetEnumAwsServerMigrationServiceV20161024ListApps ListAppsXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.ListApps"
)

type ListAppsHeaders struct {
	XAmzAlgorithm     *string                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAppsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAppsRequest struct {
	Headers ListAppsHeaders
	Request shared.ListAppsRequest `request:"mediaType=application/json"`
}

type ListAppsResponse struct {
	ContentType                       string
	InternalError                     *interface{}
	InvalidParameterException         *interface{}
	ListAppsResponse                  *shared.ListAppsResponse
	MissingRequiredParameterException *interface{}
	OperationNotPermittedException    *interface{}
	StatusCode                        int64
	UnauthorizedOperationException    *interface{}
}
