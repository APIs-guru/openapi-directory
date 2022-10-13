package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEffectivePolicyXAmzTargetEnum string

const (
	DescribeEffectivePolicyXAmzTargetEnumAwsOrganizationsV20161128DescribeEffectivePolicy DescribeEffectivePolicyXAmzTargetEnum = "AWSOrganizationsV20161128.DescribeEffectivePolicy"
)

type DescribeEffectivePolicyHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEffectivePolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEffectivePolicyRequest struct {
	Headers DescribeEffectivePolicyHeaders
	Request shared.DescribeEffectivePolicyRequest `request:"mediaType=application/json"`
}

type DescribeEffectivePolicyResponse struct {
	AwsOrganizationsNotInUseException *interface{}
	AccessDeniedException             *interface{}
	ConstraintViolationException      *interface{}
	ContentType                       string
	DescribeEffectivePolicyResponse   *shared.DescribeEffectivePolicyResponse
	EffectivePolicyNotFoundException  *interface{}
	InvalidInputException             *interface{}
	ServiceException                  *interface{}
	StatusCode                        int64
	TargetNotFoundException           *interface{}
	TooManyRequestsException          *interface{}
	UnsupportedAPIEndpointException   *interface{}
}
