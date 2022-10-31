package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateHealthCheckXAmzTargetEnum string

const (
	DisassociateHealthCheckXAmzTargetEnumAwsShield20160616DisassociateHealthCheck DisassociateHealthCheckXAmzTargetEnum = "AWSShield_20160616.DisassociateHealthCheck"
)

type DisassociateHealthCheckHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateHealthCheckXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DisassociateHealthCheckRequest struct {
	Headers DisassociateHealthCheckHeaders
	Request shared.DisassociateHealthCheckRequest `request:"mediaType=application/json"`
}

type DisassociateHealthCheckResponse struct {
	ContentType                     string
	DisassociateHealthCheckResponse map[string]interface{}
	InternalErrorException          *interface{}
	InvalidParameterException       *interface{}
	OptimisticLockException         *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
