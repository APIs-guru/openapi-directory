package operations

import (
	"openapi/pkg/models/shared"
)

type ListNotificationsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListNotificationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListNotificationsRequestBody struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
	WorkloadID *string `json:"WorkloadId,omitempty"`
}

type ListNotificationsRequest struct {
	QueryParams ListNotificationsQueryParams
	Headers     ListNotificationsHeaders
	Request     ListNotificationsRequestBody `request:"mediaType=application/json"`
}

type ListNotificationsResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	InternalServerException *interface{}
	ListNotificationsOutput *shared.ListNotificationsOutput
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
