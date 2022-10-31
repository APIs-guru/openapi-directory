package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateKmsKeyXAmzTargetEnum string

const (
	AssociateKmsKeyXAmzTargetEnumLogs20140328AssociateKmsKey AssociateKmsKeyXAmzTargetEnum = "Logs_20140328.AssociateKmsKey"
)

type AssociateKmsKeyHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateKmsKeyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AssociateKmsKeyRequest struct {
	Headers AssociateKmsKeyHeaders
	Request shared.AssociateKmsKeyRequest `request:"mediaType=application/json"`
}

type AssociateKmsKeyResponse struct {
	ContentType                 string
	InvalidParameterException   *interface{}
	OperationAbortedException   *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
