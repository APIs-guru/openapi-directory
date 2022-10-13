package operations

import (
	"openapi/pkg/models/shared"
)

type ListServicesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListServicesXAmzTargetEnum string

const (
	ListServicesXAmzTargetEnumAwsProton20200720ListServices ListServicesXAmzTargetEnum = "AwsProton20200720.ListServices"
)

type ListServicesHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListServicesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListServicesRequest struct {
	QueryParams ListServicesQueryParams
	Headers     ListServicesHeaders
	Request     shared.ListServicesInput `request:"mediaType=application/json"`
}

type ListServicesResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	InternalServerException *interface{}
	ListServicesOutput      *shared.ListServicesOutput
	StatusCode              int64
	ThrottlingException     *interface{}
	ValidationException     *interface{}
}
