package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterStreamConsumerXAmzTargetEnum string

const (
	DeregisterStreamConsumerXAmzTargetEnumKinesis20131202DeregisterStreamConsumer DeregisterStreamConsumerXAmzTargetEnum = "Kinesis_20131202.DeregisterStreamConsumer"
)

type DeregisterStreamConsumerHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeregisterStreamConsumerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
