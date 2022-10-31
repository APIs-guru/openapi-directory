package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateS3ResourcesXAmzTargetEnum string

const (
	AssociateS3ResourcesXAmzTargetEnumMacieServiceAssociateS3Resources AssociateS3ResourcesXAmzTargetEnum = "MacieService.AssociateS3Resources"
)

type AssociateS3ResourcesHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateS3ResourcesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AssociateS3ResourcesRequest struct {
	Headers AssociateS3ResourcesHeaders
	Request shared.AssociateS3ResourcesRequest `request:"mediaType=application/json"`
}

type AssociateS3ResourcesResponse struct {
	AccessDeniedException      *interface{}
	AssociateS3ResourcesResult *shared.AssociateS3ResourcesResult
	ContentType                string
	InternalException          *interface{}
	InvalidInputException      *interface{}
	LimitExceededException     *interface{}
	StatusCode                 int64
}
