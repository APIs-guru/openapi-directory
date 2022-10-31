package operations

import (
	"openapi/pkg/models/shared"
)

type ReplicateKeyXAmzTargetEnum string

const (
	ReplicateKeyXAmzTargetEnumTrentServiceReplicateKey ReplicateKeyXAmzTargetEnum = "TrentService.ReplicateKey"
)

type ReplicateKeyHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ReplicateKeyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ReplicateKeyRequest struct {
	Headers ReplicateKeyHeaders
	Request shared.ReplicateKeyRequest `request:"mediaType=application/json"`
}

type ReplicateKeyResponse struct {
	AlreadyExistsException           *interface{}
	ContentType                      string
	DisabledException                *interface{}
	InvalidArnException              *interface{}
	KmsInternalException             *interface{}
	KmsInvalidStateException         *interface{}
	LimitExceededException           *interface{}
	MalformedPolicyDocumentException *interface{}
	NotFoundException                *interface{}
	ReplicateKeyResponse             *shared.ReplicateKeyResponse
	StatusCode                       int64
	TagException                     *interface{}
	UnsupportedOperationException    *interface{}
}
