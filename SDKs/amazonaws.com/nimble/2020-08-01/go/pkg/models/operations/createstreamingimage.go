package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStreamingImagePathParams struct {
	StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
}

type CreateStreamingImageHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"style=simple,explode=false,name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateStreamingImageRequestBody struct {
	Description *string           `json:"description,omitempty"`
	Ec2ImageID  string            `json:"ec2ImageId"`
	Name        string            `json:"name"`
	Tags        map[string]string `json:"tags,omitempty"`
}

type CreateStreamingImageRequest struct {
	PathParams CreateStreamingImagePathParams
	Headers    CreateStreamingImageHeaders
	Request    CreateStreamingImageRequestBody `request:"mediaType=application/json"`
}

type CreateStreamingImageResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateStreamingImageResponse  *shared.CreateStreamingImageResponse
	InternalServerErrorException  *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
