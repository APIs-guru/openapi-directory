package operations

import (
	"openapi/pkg/models/shared"
)

type ListTemplateVersionsPathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=template-name"`
	TemplateType string `pathParam:"style=simple,explode=false,name=template-type"`
}

type ListTemplateVersionsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=next-token"`
	PageSize  *string `queryParam:"style=form,explode=true,name=page-size"`
}

type ListTemplateVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListTemplateVersionsRequest struct {
	PathParams  ListTemplateVersionsPathParams
	QueryParams ListTemplateVersionsQueryParams
	Headers     ListTemplateVersionsHeaders
}

type ListTemplateVersionsResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	ListTemplateVersionsResponse *shared.ListTemplateVersionsResponse
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
