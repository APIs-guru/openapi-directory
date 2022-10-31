package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTrialComponentXAmzTargetEnum string

const (
	CreateTrialComponentXAmzTargetEnumSageMakerCreateTrialComponent CreateTrialComponentXAmzTargetEnum = "SageMaker.CreateTrialComponent"
)

type CreateTrialComponentHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateTrialComponentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateTrialComponentRequest struct {
	Headers CreateTrialComponentHeaders
	Request shared.CreateTrialComponentRequest `request:"mediaType=application/json"`
}

type CreateTrialComponentResponse struct {
	ContentType                  string
	CreateTrialComponentResponse *shared.CreateTrialComponentResponse
	ResourceLimitExceeded        *interface{}
	StatusCode                   int64
}
