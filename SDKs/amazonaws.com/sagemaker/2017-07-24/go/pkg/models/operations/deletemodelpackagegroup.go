package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteModelPackageGroupXAmzTargetEnum string

const (
	DeleteModelPackageGroupXAmzTargetEnumSageMakerDeleteModelPackageGroup DeleteModelPackageGroupXAmzTargetEnum = "SageMaker.DeleteModelPackageGroup"
)

type DeleteModelPackageGroupHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteModelPackageGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
