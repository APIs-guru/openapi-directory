package operations

import (
	"openapi/pkg/models/shared"
)

type FailoverShardXAmzTargetEnum string

const (
	FailoverShardXAmzTargetEnumAmazonMemoryDbFailoverShard FailoverShardXAmzTargetEnum = "AmazonMemoryDB.FailoverShard"
)

type FailoverShardHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        FailoverShardXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type FailoverShardRequest struct {
	Headers FailoverShardHeaders
	Request shared.FailoverShardRequest `request:"mediaType=application/json"`
}

type FailoverShardResponse struct {
	APICallRateForCustomerExceededFault  *interface{}
	ClusterNotFoundFault                 *interface{}
	ContentType                          string
	FailoverShardResponse                *shared.FailoverShardResponse
	InvalidClusterStateFault             *interface{}
	InvalidKmsKeyFault                   *interface{}
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	ShardNotFoundFault                   *interface{}
	StatusCode                           int64
	TestFailoverNotAvailableFault        *interface{}
}
