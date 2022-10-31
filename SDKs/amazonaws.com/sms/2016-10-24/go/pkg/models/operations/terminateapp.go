package operations

import (
	"openapi/pkg/models/shared"
)

type TerminateAppXAmzTargetEnum string

const (
	TerminateAppXAmzTargetEnumAwsServerMigrationServiceV20161024TerminateApp TerminateAppXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.TerminateApp"
)

type TerminateAppHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        TerminateAppXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type TerminateAppRequest struct {
	Headers TerminateAppHeaders
	Request shared.TerminateAppRequest `request:"mediaType=application/json"`
}

type TerminateAppResponse struct {
	ContentType                       string
	InternalError                     *interface{}
	InvalidParameterException         *interface{}
	MissingRequiredParameterException *interface{}
	OperationNotPermittedException    *interface{}
	StatusCode                        int64
	TerminateAppResponse              map[string]interface{}
	UnauthorizedOperationException    *interface{}
}
