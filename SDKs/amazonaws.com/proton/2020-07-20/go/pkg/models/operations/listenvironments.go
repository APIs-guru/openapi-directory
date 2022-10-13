package operations

import (
	"openapi/pkg/models/shared"
)

type ListEnvironmentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListEnvironmentsXAmzTargetEnum string

const (
	ListEnvironmentsXAmzTargetEnumAwsProton20200720ListEnvironments ListEnvironmentsXAmzTargetEnum = "AwsProton20200720.ListEnvironments"
)

type ListEnvironmentsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListEnvironmentsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListEnvironmentsRequest struct {
	QueryParams ListEnvironmentsQueryParams
	Headers     ListEnvironmentsHeaders
	Request     shared.ListEnvironmentsInput `request:"mediaType=application/json"`
}

type ListEnvironmentsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ListEnvironmentsOutput    *shared.ListEnvironmentsOutput
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
