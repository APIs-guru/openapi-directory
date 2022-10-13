package operations

import (
	"openapi/pkg/models/shared"
)

type PutModelPackageGroupPolicyXAmzTargetEnum string

const (
	PutModelPackageGroupPolicyXAmzTargetEnumSageMakerPutModelPackageGroupPolicy PutModelPackageGroupPolicyXAmzTargetEnum = "SageMaker.PutModelPackageGroupPolicy"
)

type PutModelPackageGroupPolicyHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutModelPackageGroupPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutModelPackageGroupPolicyRequest struct {
	Headers PutModelPackageGroupPolicyHeaders
	Request shared.PutModelPackageGroupPolicyInput `request:"mediaType=application/json"`
}

type PutModelPackageGroupPolicyResponse struct {
	ContentType                      string
	PutModelPackageGroupPolicyOutput *shared.PutModelPackageGroupPolicyOutput
	StatusCode                       int64
}
