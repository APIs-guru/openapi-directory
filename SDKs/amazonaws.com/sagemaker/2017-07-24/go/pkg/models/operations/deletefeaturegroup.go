package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFeatureGroupXAmzTargetEnum string

const (
	DeleteFeatureGroupXAmzTargetEnumSageMakerDeleteFeatureGroup DeleteFeatureGroupXAmzTargetEnum = "SageMaker.DeleteFeatureGroup"
)

type DeleteFeatureGroupHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteFeatureGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
