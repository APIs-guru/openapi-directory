package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateKmsKeyXAmzTargetEnum string

const (
	DisassociateKmsKeyXAmzTargetEnumLogs20140328DisassociateKmsKey DisassociateKmsKeyXAmzTargetEnum = "Logs_20140328.DisassociateKmsKey"
)

type DisassociateKmsKeyHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateKmsKeyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
