package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateStreamingImagePathParams struct {
	StreamingImageID string `pathParam:"style=simple,explode=false,name=streamingImageId"`
	StudioID         string `pathParam:"style=simple,explode=false,name=studioId"`
}

type UpdateStreamingImageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzClientToken   *string `header:"name=X-Amz-Client-Token"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateStreamingImageRequestBody struct {
	Description *string `json:"description"`
	Name        *string `json:"name"`
}

type UpdateStreamingImageRequest struct {
	PathParams UpdateStreamingImagePathParams
	Headers    UpdateStreamingImageHeaders
	Request    UpdateStreamingImageRequestBody `request:"mediaType=application/json"`
}

type UpdateStreamingImageResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerErrorException  *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateStreamingImageResponse  *shared.UpdateStreamingImageResponse
	ValidationException           *interface{}
}
