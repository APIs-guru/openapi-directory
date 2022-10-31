package operations

import (
	"openapi/pkg/models/shared"
)

type GetMailboxDetailsXAmzTargetEnum string

const (
	GetMailboxDetailsXAmzTargetEnumWorkMailServiceGetMailboxDetails GetMailboxDetailsXAmzTargetEnum = "WorkMailService.GetMailboxDetails"
)

type GetMailboxDetailsHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetMailboxDetailsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetMailboxDetailsRequest struct {
	Headers GetMailboxDetailsHeaders
	Request shared.GetMailboxDetailsRequest `request:"mediaType=application/json"`
}

type GetMailboxDetailsResponse struct {
	ContentType                   string
	EntityNotFoundException       *interface{}
	GetMailboxDetailsResponse     *shared.GetMailboxDetailsResponse
	OrganizationNotFoundException *interface{}
	OrganizationStateException    *interface{}
	StatusCode                    int64
}
