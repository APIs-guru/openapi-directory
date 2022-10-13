package operations

import (
	"openapi/pkg/models/shared"
)

type CreateHomeRegionControlXAmzTargetEnum string

const (
	CreateHomeRegionControlXAmzTargetEnumAwsMigrationHubMultiAccountServiceCreateHomeRegionControl CreateHomeRegionControlXAmzTargetEnum = "AWSMigrationHubMultiAccountService.CreateHomeRegionControl"
)

type CreateHomeRegionControlHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateHomeRegionControlXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateHomeRegionControlRequest struct {
	Headers CreateHomeRegionControlHeaders
	Request shared.CreateHomeRegionControlRequest `request:"mediaType=application/json"`
}

type CreateHomeRegionControlResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	CreateHomeRegionControlResult *shared.CreateHomeRegionControlResult
	DryRunOperation               *interface{}
	InternalServerError           *interface{}
	InvalidInputException         *interface{}
	ServiceUnavailableException   *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
