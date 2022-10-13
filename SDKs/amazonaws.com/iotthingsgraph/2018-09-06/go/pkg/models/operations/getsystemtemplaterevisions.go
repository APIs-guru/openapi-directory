package operations

import (
	"openapi/pkg/models/shared"
)

type GetSystemTemplateRevisionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetSystemTemplateRevisionsXAmzTargetEnum string

const (
	GetSystemTemplateRevisionsXAmzTargetEnumIotThingsGraphFrontEndServiceGetSystemTemplateRevisions GetSystemTemplateRevisionsXAmzTargetEnum = "IotThingsGraphFrontEndService.GetSystemTemplateRevisions"
)

type GetSystemTemplateRevisionsHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSystemTemplateRevisionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetSystemTemplateRevisionsRequest struct {
	QueryParams GetSystemTemplateRevisionsQueryParams
	Headers     GetSystemTemplateRevisionsHeaders
	Request     shared.GetSystemTemplateRevisionsRequest `request:"mediaType=application/json"`
}

type GetSystemTemplateRevisionsResponse struct {
	ContentType                        string
	GetSystemTemplateRevisionsResponse *shared.GetSystemTemplateRevisionsResponse
	InternalFailureException           *interface{}
	InvalidRequestException            *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
}
