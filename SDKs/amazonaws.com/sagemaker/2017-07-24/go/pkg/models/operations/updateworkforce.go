package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateWorkforceXAmzTargetEnum string

const (
	UpdateWorkforceXAmzTargetEnumSageMakerUpdateWorkforce UpdateWorkforceXAmzTargetEnum = "SageMaker.UpdateWorkforce"
)

type UpdateWorkforceHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateWorkforceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateWorkforceRequest struct {
	Headers UpdateWorkforceHeaders
	Request shared.UpdateWorkforceRequest `request:"mediaType=application/json"`
}

type UpdateWorkforceResponse struct {
	ContentType             string
	StatusCode              int64
	UpdateWorkforceResponse *shared.UpdateWorkforceResponse
}
