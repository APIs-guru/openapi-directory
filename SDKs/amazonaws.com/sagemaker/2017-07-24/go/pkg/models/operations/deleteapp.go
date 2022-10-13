package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAppXAmzTargetEnum string

const (
	DeleteAppXAmzTargetEnumSageMakerDeleteApp DeleteAppXAmzTargetEnum = "SageMaker.DeleteApp"
)

type DeleteAppHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAppXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteAppRequest struct {
	Headers DeleteAppHeaders
	Request shared.DeleteAppRequest `request:"mediaType=application/json"`
}

type DeleteAppResponse struct {
	ContentType      string
	ResourceInUse    *interface{}
	ResourceNotFound *interface{}
	StatusCode       int64
}
