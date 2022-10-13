package operations

import (
	"openapi/pkg/models/shared"
)

type AddAssociationXAmzTargetEnum string

const (
	AddAssociationXAmzTargetEnumSageMakerAddAssociation AddAssociationXAmzTargetEnum = "SageMaker.AddAssociation"
)

type AddAssociationHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AddAssociationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AddAssociationRequest struct {
	Headers AddAssociationHeaders
	Request shared.AddAssociationRequest `request:"mediaType=application/json"`
}

type AddAssociationResponse struct {
	AddAssociationResponse *shared.AddAssociationResponse
	ContentType            string
	ResourceLimitExceeded  *interface{}
	ResourceNotFound       *interface{}
	StatusCode             int64
}
