package operations

import (
	"openapi/pkg/models/shared"
)

type ListServiceTemplateVersionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListServiceTemplateVersionsXAmzTargetEnum string

const (
	ListServiceTemplateVersionsXAmzTargetEnumAwsProton20200720ListServiceTemplateVersions ListServiceTemplateVersionsXAmzTargetEnum = "AwsProton20200720.ListServiceTemplateVersions"
)

type ListServiceTemplateVersionsHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListServiceTemplateVersionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListServiceTemplateVersionsRequest struct {
	QueryParams ListServiceTemplateVersionsQueryParams
	Headers     ListServiceTemplateVersionsHeaders
	Request     shared.ListServiceTemplateVersionsInput `request:"mediaType=application/json"`
}

type ListServiceTemplateVersionsResponse struct {
	AccessDeniedException             *interface{}
	ContentType                       string
	InternalServerException           *interface{}
	ListServiceTemplateVersionsOutput *shared.ListServiceTemplateVersionsOutput
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	ValidationException               *interface{}
}
