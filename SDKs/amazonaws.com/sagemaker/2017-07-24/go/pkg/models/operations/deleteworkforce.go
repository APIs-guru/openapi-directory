package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWorkforceXAmzTargetEnum string

const (
	DeleteWorkforceXAmzTargetEnumSageMakerDeleteWorkforce DeleteWorkforceXAmzTargetEnum = "SageMaker.DeleteWorkforce"
)

type DeleteWorkforceHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteWorkforceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
