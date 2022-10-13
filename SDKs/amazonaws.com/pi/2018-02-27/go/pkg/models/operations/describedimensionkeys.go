package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDimensionKeysXAmzTargetEnum string

const (
	DescribeDimensionKeysXAmzTargetEnumPerformanceInsightsv20180227DescribeDimensionKeys DescribeDimensionKeysXAmzTargetEnum = "PerformanceInsightsv20180227.DescribeDimensionKeys"
)

type DescribeDimensionKeysHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDimensionKeysXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDimensionKeysRequest struct {
	Headers DescribeDimensionKeysHeaders
	Request shared.DescribeDimensionKeysRequest `request:"mediaType=application/json"`
}

type DescribeDimensionKeysResponse struct {
	ContentType                   string
	DescribeDimensionKeysResponse *shared.DescribeDimensionKeysResponse
	InternalServiceError          *interface{}
	InvalidArgumentException      *interface{}
	NotAuthorizedException        *interface{}
	StatusCode                    int64
}
