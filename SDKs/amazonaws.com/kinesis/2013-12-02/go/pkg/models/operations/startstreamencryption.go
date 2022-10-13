package operations

import (
	"openapi/pkg/models/shared"
)

type StartStreamEncryptionXAmzTargetEnum string

const (
	StartStreamEncryptionXAmzTargetEnumKinesis20131202StartStreamEncryption StartStreamEncryptionXAmzTargetEnum = "Kinesis_20131202.StartStreamEncryption"
)

type StartStreamEncryptionHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartStreamEncryptionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartStreamEncryptionRequest struct {
	Headers StartStreamEncryptionHeaders
	Request shared.StartStreamEncryptionInput `request:"mediaType=application/json"`
}

type StartStreamEncryptionResponse struct {
	ContentType               string
	InvalidArgumentException  *interface{}
	KmsAccessDeniedException  *interface{}
	KmsDisabledException      *interface{}
	KmsInvalidStateException  *interface{}
	KmsNotFoundException      *interface{}
	KmsOptInRequired          *interface{}
	KmsThrottlingException    *interface{}
	LimitExceededException    *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
