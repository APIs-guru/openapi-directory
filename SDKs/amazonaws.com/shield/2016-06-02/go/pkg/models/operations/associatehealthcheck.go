package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateHealthCheckXAmzTargetEnum string

const (
	AssociateHealthCheckXAmzTargetEnumAwsShield20160616AssociateHealthCheck AssociateHealthCheckXAmzTargetEnum = "AWSShield_20160616.AssociateHealthCheck"
)

type AssociateHealthCheckHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateHealthCheckXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateHealthCheckRequest struct {
	Headers AssociateHealthCheckHeaders
	Request shared.AssociateHealthCheckRequest `request:"mediaType=application/json"`
}

type AssociateHealthCheckResponse struct {
	AssociateHealthCheckResponse map[string]interface{}
	ContentType                  string
	InternalErrorException       *interface{}
	InvalidParameterException    *interface{}
	LimitsExceededException      *interface{}
	OptimisticLockException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
