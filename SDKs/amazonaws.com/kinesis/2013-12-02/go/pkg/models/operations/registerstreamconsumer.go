package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterStreamConsumerXAmzTargetEnum string

const (
	RegisterStreamConsumerXAmzTargetEnumKinesis20131202RegisterStreamConsumer RegisterStreamConsumerXAmzTargetEnum = "Kinesis_20131202.RegisterStreamConsumer"
)

type RegisterStreamConsumerHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterStreamConsumerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RegisterStreamConsumerRequest struct {
	Headers RegisterStreamConsumerHeaders
	Request shared.RegisterStreamConsumerInput `request:"mediaType=application/json"`
}

type RegisterStreamConsumerResponse struct {
	ContentType                  string
	InvalidArgumentException     *interface{}
	LimitExceededException       *interface{}
	RegisterStreamConsumerOutput *shared.RegisterStreamConsumerOutput
	ResourceInUseException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
