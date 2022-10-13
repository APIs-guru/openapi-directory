package operations

import (
	"openapi/pkg/models/shared"
)

type ListSafetyRulesPathParams struct {
	ControlPanelArn string `pathParam:"style=simple,explode=false,name=ControlPanelArn"`
}

type ListSafetyRulesQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListSafetyRulesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListSafetyRulesRequest struct {
	PathParams  ListSafetyRulesPathParams
	QueryParams ListSafetyRulesQueryParams
	Headers     ListSafetyRulesHeaders
}

type ListSafetyRulesResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ListSafetyRulesResponse   *shared.ListSafetyRulesResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
