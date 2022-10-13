package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateKmsKeyXAmzTargetEnum string

const (
	DisassociateKmsKeyXAmzTargetEnumLogs20140328DisassociateKmsKey DisassociateKmsKeyXAmzTargetEnum = "Logs_20140328.DisassociateKmsKey"
)

type DisassociateKmsKeyHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateKmsKeyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateKmsKeyRequest struct {
	Headers DisassociateKmsKeyHeaders
	Request shared.DisassociateKmsKeyRequest `request:"mediaType=application/json"`
}

type DisassociateKmsKeyResponse struct {
	ContentType                 string
	InvalidParameterException   *interface{}
	OperationAbortedException   *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
