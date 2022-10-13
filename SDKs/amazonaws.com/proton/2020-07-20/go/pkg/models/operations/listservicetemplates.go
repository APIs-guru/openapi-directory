package operations

import (
	"openapi/pkg/models/shared"
)

type ListServiceTemplatesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListServiceTemplatesXAmzTargetEnum string

const (
	ListServiceTemplatesXAmzTargetEnumAwsProton20200720ListServiceTemplates ListServiceTemplatesXAmzTargetEnum = "AwsProton20200720.ListServiceTemplates"
)

type ListServiceTemplatesHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListServiceTemplatesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListServiceTemplatesRequest struct {
	QueryParams ListServiceTemplatesQueryParams
	Headers     ListServiceTemplatesHeaders
	Request     shared.ListServiceTemplatesInput `request:"mediaType=application/json"`
}

type ListServiceTemplatesResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	InternalServerException    *interface{}
	ListServiceTemplatesOutput *shared.ListServiceTemplatesOutput
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
