package operations

import (
	"openapi/pkg/models/shared"
)

type PutModelPackageGroupPolicyXAmzTargetEnum string

const (
	PutModelPackageGroupPolicyXAmzTargetEnumSageMakerPutModelPackageGroupPolicy PutModelPackageGroupPolicyXAmzTargetEnum = "SageMaker.PutModelPackageGroupPolicy"
)

type PutModelPackageGroupPolicyHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutModelPackageGroupPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
