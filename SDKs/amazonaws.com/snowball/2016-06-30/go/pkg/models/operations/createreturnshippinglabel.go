package operations

import (
	"openapi/pkg/models/shared"
)

type CreateReturnShippingLabelXAmzTargetEnum string

const (
	CreateReturnShippingLabelXAmzTargetEnumAwsieSnowballJobManagementServiceCreateReturnShippingLabel CreateReturnShippingLabelXAmzTargetEnum = "AWSIESnowballJobManagementService.CreateReturnShippingLabel"
)

type CreateReturnShippingLabelHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateReturnShippingLabelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateReturnShippingLabelRequest struct {
	Headers CreateReturnShippingLabelHeaders
	Request shared.CreateReturnShippingLabelRequest `request:"mediaType=application/json"`
}

type CreateReturnShippingLabelResponse struct {
	ConflictException                         *interface{}
	ContentType                               string
	CreateReturnShippingLabelResult           *shared.CreateReturnShippingLabelResult
	InvalidInputCombinationException          *interface{}
	InvalidJobStateException                  *interface{}
	InvalidResourceException                  *interface{}
	ReturnShippingLabelAlreadyExistsException *interface{}
	StatusCode                                int64
}
