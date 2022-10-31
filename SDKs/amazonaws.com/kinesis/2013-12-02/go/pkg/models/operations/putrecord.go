package operations

import (
	"openapi/pkg/models/shared"
)

type PutRecordXAmzTargetEnum string

const (
	PutRecordXAmzTargetEnumKinesis20131202PutRecord PutRecordXAmzTargetEnum = "Kinesis_20131202.PutRecord"
)

type PutRecordHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutRecordXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutRecordRequest struct {
	Headers PutRecordHeaders
	Request shared.PutRecordInput `request:"mediaType=application/json"`
}

type PutRecordResponse struct {
	ContentType                            string
	InvalidArgumentException               *interface{}
	KmsAccessDeniedException               *interface{}
	KmsDisabledException                   *interface{}
	KmsInvalidStateException               *interface{}
	KmsNotFoundException                   *interface{}
	KmsOptInRequired                       *interface{}
	KmsThrottlingException                 *interface{}
	ProvisionedThroughputExceededException *interface{}
	PutRecordOutput                        *shared.PutRecordOutput
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
}
