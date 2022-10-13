package operations

import (
	"openapi/pkg/models/shared"
)

type ListServiceInstancesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListServiceInstancesXAmzTargetEnum string

const (
	ListServiceInstancesXAmzTargetEnumAwsProton20200720ListServiceInstances ListServiceInstancesXAmzTargetEnum = "AwsProton20200720.ListServiceInstances"
)

type ListServiceInstancesHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListServiceInstancesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListServiceInstancesRequest struct {
	QueryParams ListServiceInstancesQueryParams
	Headers     ListServiceInstancesHeaders
	Request     shared.ListServiceInstancesInput `request:"mediaType=application/json"`
}

type ListServiceInstancesResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	InternalServerException    *interface{}
	ListServiceInstancesOutput *shared.ListServiceInstancesOutput
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
