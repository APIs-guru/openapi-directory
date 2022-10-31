package operations

import (
	"openapi/pkg/models/shared"
)

type ListEnvironmentTemplateVersionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListEnvironmentTemplateVersionsXAmzTargetEnum string

const (
	ListEnvironmentTemplateVersionsXAmzTargetEnumAwsProton20200720ListEnvironmentTemplateVersions ListEnvironmentTemplateVersionsXAmzTargetEnum = "AwsProton20200720.ListEnvironmentTemplateVersions"
)

type ListEnvironmentTemplateVersionsHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListEnvironmentTemplateVersionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListEnvironmentTemplateVersionsRequest struct {
	QueryParams ListEnvironmentTemplateVersionsQueryParams
	Headers     ListEnvironmentTemplateVersionsHeaders
	Request     shared.ListEnvironmentTemplateVersionsInput `request:"mediaType=application/json"`
}

type ListEnvironmentTemplateVersionsResponse struct {
	AccessDeniedException                 *interface{}
	ContentType                           string
	InternalServerException               *interface{}
	ListEnvironmentTemplateVersionsOutput *shared.ListEnvironmentTemplateVersionsOutput
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
	ThrottlingException                   *interface{}
	ValidationException                   *interface{}
}
