package operations

import (
	"openapi/pkg/models/shared"
)

type CreateModelPackageGroupXAmzTargetEnum string

const (
	CreateModelPackageGroupXAmzTargetEnumSageMakerCreateModelPackageGroup CreateModelPackageGroupXAmzTargetEnum = "SageMaker.CreateModelPackageGroup"
)

type CreateModelPackageGroupHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateModelPackageGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateModelPackageGroupRequest struct {
	Headers CreateModelPackageGroupHeaders
	Request shared.CreateModelPackageGroupInput `request:"mediaType=application/json"`
}

type CreateModelPackageGroupResponse struct {
	ContentType                   string
	CreateModelPackageGroupOutput *shared.CreateModelPackageGroupOutput
	ResourceLimitExceeded         *interface{}
	StatusCode                    int64
}
