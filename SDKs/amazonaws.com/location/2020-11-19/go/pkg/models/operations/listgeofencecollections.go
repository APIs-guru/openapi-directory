package operations

import (
	"openapi/pkg/models/shared"
)

type ListGeofenceCollectionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListGeofenceCollectionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListGeofenceCollectionsRequestBody struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}

type ListGeofenceCollectionsRequest struct {
	QueryParams ListGeofenceCollectionsQueryParams
	Headers     ListGeofenceCollectionsHeaders
	Request     ListGeofenceCollectionsRequestBody `request:"mediaType=application/json"`
}

type ListGeofenceCollectionsResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	InternalServerException         *interface{}
	ListGeofenceCollectionsResponse *shared.ListGeofenceCollectionsResponse
	StatusCode                      int64
	ThrottlingException             *interface{}
	ValidationException             *interface{}
}
