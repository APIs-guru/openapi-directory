package operations

import (
	"openapi/pkg/models/shared"
)

type LaunchAppXAmzTargetEnum string

const (
	LaunchAppXAmzTargetEnumAwsServerMigrationServiceV20161024LaunchApp LaunchAppXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.LaunchApp"
)

type LaunchAppHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        LaunchAppXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type LaunchAppRequest struct {
	Headers LaunchAppHeaders
	Request shared.LaunchAppRequest `request:"mediaType=application/json"`
}

type LaunchAppResponse struct {
	ContentType                       string
	InternalError                     *interface{}
	InvalidParameterException         *interface{}
	LaunchAppResponse                 map[string]interface{}
	MissingRequiredParameterException *interface{}
	OperationNotPermittedException    *interface{}
	StatusCode                        int64
	UnauthorizedOperationException    *interface{}
}
