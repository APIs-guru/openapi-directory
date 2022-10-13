package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDomainXAmzTargetEnum string

const (
	DescribeDomainXAmzTargetEnumSageMakerDescribeDomain DescribeDomainXAmzTargetEnum = "SageMaker.DescribeDomain"
)

type DescribeDomainHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDomainXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDomainRequest struct {
	Headers DescribeDomainHeaders
	Request shared.DescribeDomainRequest `request:"mediaType=application/json"`
}

type DescribeDomainResponse struct {
	ContentType            string
	DescribeDomainResponse *shared.DescribeDomainResponse
	ResourceNotFound       *interface{}
	StatusCode             int64
}
