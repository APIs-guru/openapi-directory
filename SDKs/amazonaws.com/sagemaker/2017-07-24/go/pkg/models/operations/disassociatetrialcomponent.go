package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateTrialComponentXAmzTargetEnum string

const (
	DisassociateTrialComponentXAmzTargetEnumSageMakerDisassociateTrialComponent DisassociateTrialComponentXAmzTargetEnum = "SageMaker.DisassociateTrialComponent"
)

type DisassociateTrialComponentHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateTrialComponentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateTrialComponentRequest struct {
	Headers DisassociateTrialComponentHeaders
	Request shared.DisassociateTrialComponentRequest `request:"mediaType=application/json"`
}

type DisassociateTrialComponentResponse struct {
	ContentType                        string
	DisassociateTrialComponentResponse *shared.DisassociateTrialComponentResponse
	ResourceNotFound                   *interface{}
	StatusCode                         int64
}
