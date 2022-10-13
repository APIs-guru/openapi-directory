package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteModelPackageGroupXAmzTargetEnum string

const (
	DeleteModelPackageGroupXAmzTargetEnumSageMakerDeleteModelPackageGroup DeleteModelPackageGroupXAmzTargetEnum = "SageMaker.DeleteModelPackageGroup"
)

type DeleteModelPackageGroupHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteModelPackageGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteModelPackageGroupRequest struct {
	Headers DeleteModelPackageGroupHeaders
	Request shared.DeleteModelPackageGroupInput `request:"mediaType=application/json"`
}

type DeleteModelPackageGroupResponse struct {
	ConflictException *interface{}
	ContentType       string
	StatusCode        int64
}
