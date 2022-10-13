package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteQueryDefinitionXAmzTargetEnum string

const (
	DeleteQueryDefinitionXAmzTargetEnumLogs20140328DeleteQueryDefinition DeleteQueryDefinitionXAmzTargetEnum = "Logs_20140328.DeleteQueryDefinition"
)

type DeleteQueryDefinitionHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteQueryDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteQueryDefinitionRequest struct {
	Headers DeleteQueryDefinitionHeaders
	Request shared.DeleteQueryDefinitionRequest `request:"mediaType=application/json"`
}

type DeleteQueryDefinitionResponse struct {
	ContentType                   string
	DeleteQueryDefinitionResponse *shared.DeleteQueryDefinitionResponse
	InvalidParameterException     *interface{}
	ResourceNotFoundException     *interface{}
	ServiceUnavailableException   *interface{}
	StatusCode                    int64
}
