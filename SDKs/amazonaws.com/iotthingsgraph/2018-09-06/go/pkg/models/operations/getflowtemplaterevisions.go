package operations

import (
	"openapi/pkg/models/shared"
)

type GetFlowTemplateRevisionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetFlowTemplateRevisionsXAmzTargetEnum string

const (
	GetFlowTemplateRevisionsXAmzTargetEnumIotThingsGraphFrontEndServiceGetFlowTemplateRevisions GetFlowTemplateRevisionsXAmzTargetEnum = "IotThingsGraphFrontEndService.GetFlowTemplateRevisions"
)

type GetFlowTemplateRevisionsHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetFlowTemplateRevisionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetFlowTemplateRevisionsRequest struct {
	QueryParams GetFlowTemplateRevisionsQueryParams
	Headers     GetFlowTemplateRevisionsHeaders
	Request     shared.GetFlowTemplateRevisionsRequest `request:"mediaType=application/json"`
}

type GetFlowTemplateRevisionsResponse struct {
	ContentType                      string
	GetFlowTemplateRevisionsResponse *shared.GetFlowTemplateRevisionsResponse
	InternalFailureException         *interface{}
	InvalidRequestException          *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
}
