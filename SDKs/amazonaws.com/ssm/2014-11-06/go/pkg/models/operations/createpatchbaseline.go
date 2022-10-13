package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePatchBaselineXAmzTargetEnum string

const (
	CreatePatchBaselineXAmzTargetEnumAmazonSsmCreatePatchBaseline CreatePatchBaselineXAmzTargetEnum = "AmazonSSM.CreatePatchBaseline"
)

type CreatePatchBaselineHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePatchBaselineXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreatePatchBaselineRequest struct {
	Headers CreatePatchBaselineHeaders
	Request shared.CreatePatchBaselineRequest `request:"mediaType=application/json"`
}

type CreatePatchBaselineResponse struct {
	ContentType                    string
	CreatePatchBaselineResult      *shared.CreatePatchBaselineResult
	IdempotentParameterMismatch    *interface{}
	InternalServerError            *interface{}
	ResourceLimitExceededException *interface{}
	StatusCode                     int64
}
