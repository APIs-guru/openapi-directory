package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFeatureGroupXAmzTargetEnum string

const (
	DeleteFeatureGroupXAmzTargetEnumSageMakerDeleteFeatureGroup DeleteFeatureGroupXAmzTargetEnum = "SageMaker.DeleteFeatureGroup"
)

type DeleteFeatureGroupHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteFeatureGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteFeatureGroupRequest struct {
	Headers DeleteFeatureGroupHeaders
	Request shared.DeleteFeatureGroupRequest `request:"mediaType=application/json"`
}

type DeleteFeatureGroupResponse struct {
	ContentType      string
	ResourceNotFound *interface{}
	StatusCode       int64
}
