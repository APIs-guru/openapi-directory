package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteModelPackageGroupPolicyXAmzTargetEnum string

const (
	DeleteModelPackageGroupPolicyXAmzTargetEnumSageMakerDeleteModelPackageGroupPolicy DeleteModelPackageGroupPolicyXAmzTargetEnum = "SageMaker.DeleteModelPackageGroupPolicy"
)

type DeleteModelPackageGroupPolicyHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteModelPackageGroupPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteModelPackageGroupPolicyRequest struct {
	Headers DeleteModelPackageGroupPolicyHeaders
	Request shared.DeleteModelPackageGroupPolicyInput `request:"mediaType=application/json"`
}

type DeleteModelPackageGroupPolicyResponse struct {
	ContentType string
	StatusCode  int64
}
