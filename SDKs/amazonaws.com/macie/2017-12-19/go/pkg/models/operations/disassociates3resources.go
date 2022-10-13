package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateS3ResourcesXAmzTargetEnum string

const (
	DisassociateS3ResourcesXAmzTargetEnumMacieServiceDisassociateS3Resources DisassociateS3ResourcesXAmzTargetEnum = "MacieService.DisassociateS3Resources"
)

type DisassociateS3ResourcesHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateS3ResourcesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateS3ResourcesRequest struct {
	Headers DisassociateS3ResourcesHeaders
	Request shared.DisassociateS3ResourcesRequest `request:"mediaType=application/json"`
}

type DisassociateS3ResourcesResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	DisassociateS3ResourcesResult *shared.DisassociateS3ResourcesResult
	InternalException             *interface{}
	InvalidInputException         *interface{}
	StatusCode                    int64
}
