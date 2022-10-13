package operations

import (
	"openapi/pkg/models/shared"
)

type GetModelPackageGroupPolicyXAmzTargetEnum string

const (
	GetModelPackageGroupPolicyXAmzTargetEnumSageMakerGetModelPackageGroupPolicy GetModelPackageGroupPolicyXAmzTargetEnum = "SageMaker.GetModelPackageGroupPolicy"
)

type GetModelPackageGroupPolicyHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetModelPackageGroupPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetModelPackageGroupPolicyRequest struct {
	Headers GetModelPackageGroupPolicyHeaders
	Request shared.GetModelPackageGroupPolicyInput `request:"mediaType=application/json"`
}

type GetModelPackageGroupPolicyResponse struct {
	ContentType                      string
	GetModelPackageGroupPolicyOutput *shared.GetModelPackageGroupPolicyOutput
	StatusCode                       int64
}
