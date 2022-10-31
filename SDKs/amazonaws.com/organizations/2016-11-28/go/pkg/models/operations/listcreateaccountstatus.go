package operations

import (
	"openapi/pkg/models/shared"
)

type ListCreateAccountStatusQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListCreateAccountStatusXAmzTargetEnum string

const (
	ListCreateAccountStatusXAmzTargetEnumAwsOrganizationsV20161128ListCreateAccountStatus ListCreateAccountStatusXAmzTargetEnum = "AWSOrganizationsV20161128.ListCreateAccountStatus"
)

type ListCreateAccountStatusHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCreateAccountStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListCreateAccountStatusRequest struct {
	QueryParams ListCreateAccountStatusQueryParams
	Headers     ListCreateAccountStatusHeaders
	Request     shared.ListCreateAccountStatusRequest `request:"mediaType=application/json"`
}

type ListCreateAccountStatusResponse struct {
	AwsOrganizationsNotInUseException *interface{}
	AccessDeniedException             *interface{}
	ContentType                       string
	InvalidInputException             *interface{}
	ListCreateAccountStatusResponse   *shared.ListCreateAccountStatusResponse
	ServiceException                  *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
	UnsupportedAPIEndpointException   *interface{}
}
