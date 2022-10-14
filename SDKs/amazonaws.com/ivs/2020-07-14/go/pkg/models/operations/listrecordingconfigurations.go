package operations

import (
	"openapi/pkg/models/shared"
)

type ListRecordingConfigurationsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListRecordingConfigurationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListRecordingConfigurationsRequestBody struct {
	MaxResults *int64  `json:"maxResults,omitempty"`
	NextToken  *string `json:"nextToken,omitempty"`
}

type ListRecordingConfigurationsRequest struct {
	QueryParams ListRecordingConfigurationsQueryParams
	Headers     ListRecordingConfigurationsHeaders
	Request     ListRecordingConfigurationsRequestBody `request:"mediaType=application/json"`
}

type ListRecordingConfigurationsResponse struct {
	AccessDeniedException               *interface{}
	ContentType                         string
	InternalServerException             *interface{}
	ListRecordingConfigurationsResponse *shared.ListRecordingConfigurationsResponse
	StatusCode                          int64
	ValidationException                 *interface{}
}
