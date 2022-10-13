package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterStreamConsumerXAmzTargetEnum string

const (
	DeregisterStreamConsumerXAmzTargetEnumKinesis20131202DeregisterStreamConsumer DeregisterStreamConsumerXAmzTargetEnum = "Kinesis_20131202.DeregisterStreamConsumer"
)

type DeregisterStreamConsumerHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeregisterStreamConsumerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeregisterStreamConsumerRequest struct {
	Headers DeregisterStreamConsumerHeaders
	Request shared.DeregisterStreamConsumerInput `request:"mediaType=application/json"`
}

type DeregisterStreamConsumerResponse struct {
	ContentType               string
	InvalidArgumentException  *interface{}
	LimitExceededException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
