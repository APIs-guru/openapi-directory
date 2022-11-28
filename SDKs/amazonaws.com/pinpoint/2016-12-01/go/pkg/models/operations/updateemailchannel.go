package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEmailChannelPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type UpdateEmailChannelHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateEmailChannelRequestBodyEmailChannelRequest
// Specifies the status and settings of the email channel for an application.
type UpdateEmailChannelRequestBodyEmailChannelRequest struct {
	ConfigurationSet *string `json:"ConfigurationSet,omitempty"`
	Enabled          *bool   `json:"Enabled,omitempty"`
	FromAddress      *string `json:"FromAddress,omitempty"`
	Identity         *string `json:"Identity,omitempty"`
	RoleArn          *string `json:"RoleArn,omitempty"`
}

type UpdateEmailChannelRequestBody struct {
	EmailChannelRequest UpdateEmailChannelRequestBodyEmailChannelRequest `json:"EmailChannelRequest"`
}

type UpdateEmailChannelRequest struct {
	PathParams UpdateEmailChannelPathParams
	Headers    UpdateEmailChannelHeaders
	Request    UpdateEmailChannelRequestBody `request:"mediaType=application/json"`
}

type UpdateEmailChannelResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateEmailChannelResponse   *shared.UpdateEmailChannelResponse
}
