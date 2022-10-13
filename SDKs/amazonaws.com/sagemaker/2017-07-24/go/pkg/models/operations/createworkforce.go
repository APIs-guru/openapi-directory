package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorkforceXAmzTargetEnum string

const (
	CreateWorkforceXAmzTargetEnumSageMakerCreateWorkforce CreateWorkforceXAmzTargetEnum = "SageMaker.CreateWorkforce"
)

type CreateWorkforceHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateWorkforceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateWorkforceRequest struct {
	Headers CreateWorkforceHeaders
	Request shared.CreateWorkforceRequest `request:"mediaType=application/json"`
}

type CreateWorkforceResponse struct {
	ContentType             string
	CreateWorkforceResponse *shared.CreateWorkforceResponse
	StatusCode              int64
}
