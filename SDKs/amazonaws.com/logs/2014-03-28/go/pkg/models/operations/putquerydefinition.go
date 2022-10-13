package operations

import (
	"openapi/pkg/models/shared"
)

type PutQueryDefinitionXAmzTargetEnum string

const (
	PutQueryDefinitionXAmzTargetEnumLogs20140328PutQueryDefinition PutQueryDefinitionXAmzTargetEnum = "Logs_20140328.PutQueryDefinition"
)

type PutQueryDefinitionHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutQueryDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutQueryDefinitionRequest struct {
	Headers PutQueryDefinitionHeaders
	Request shared.PutQueryDefinitionRequest `request:"mediaType=application/json"`
}

type PutQueryDefinitionResponse struct {
	ContentType                 string
	InvalidParameterException   *interface{}
	PutQueryDefinitionResponse  *shared.PutQueryDefinitionResponse
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
