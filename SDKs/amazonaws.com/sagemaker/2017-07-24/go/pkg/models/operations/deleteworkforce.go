package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWorkforceXAmzTargetEnum string

const (
	DeleteWorkforceXAmzTargetEnumSageMakerDeleteWorkforce DeleteWorkforceXAmzTargetEnum = "SageMaker.DeleteWorkforce"
)

type DeleteWorkforceHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteWorkforceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteWorkforceRequest struct {
	Headers DeleteWorkforceHeaders
	Request shared.DeleteWorkforceRequest `request:"mediaType=application/json"`
}

type DeleteWorkforceResponse struct {
	ContentType             string
	DeleteWorkforceResponse map[string]interface{}
	StatusCode              int64
}
