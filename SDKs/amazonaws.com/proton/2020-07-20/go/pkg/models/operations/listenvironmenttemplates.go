package operations

import (
	"openapi/pkg/models/shared"
)

type ListEnvironmentTemplatesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListEnvironmentTemplatesXAmzTargetEnum string

const (
	ListEnvironmentTemplatesXAmzTargetEnumAwsProton20200720ListEnvironmentTemplates ListEnvironmentTemplatesXAmzTargetEnum = "AwsProton20200720.ListEnvironmentTemplates"
)

type ListEnvironmentTemplatesHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListEnvironmentTemplatesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListEnvironmentTemplatesRequest struct {
	QueryParams ListEnvironmentTemplatesQueryParams
	Headers     ListEnvironmentTemplatesHeaders
	Request     shared.ListEnvironmentTemplatesInput `request:"mediaType=application/json"`
}

type ListEnvironmentTemplatesResponse struct {
	AccessDeniedException          *interface{}
	ContentType                    string
	InternalServerException        *interface{}
	ListEnvironmentTemplatesOutput *shared.ListEnvironmentTemplatesOutput
	StatusCode                     int64
	ThrottlingException            *interface{}
	ValidationException            *interface{}
}
