package operations

import (
	"openapi/pkg/models/shared"
)

type PromoteResourceShareCreatedFromPolicyQueryParams struct {
	ResourceShareArn string `queryParam:"style=form,explode=true,name=resourceShareArn"`
}

type PromoteResourceShareCreatedFromPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PromoteResourceShareCreatedFromPolicyRequest struct {
	QueryParams PromoteResourceShareCreatedFromPolicyQueryParams
	Headers     PromoteResourceShareCreatedFromPolicyHeaders
}

type PromoteResourceShareCreatedFromPolicyResponse struct {
	ContentType                                   string
	InvalidParameterException                     *interface{}
	MalformedArnException                         *interface{}
	MissingRequiredParameterException             *interface{}
	OperationNotPermittedException                *interface{}
	PromoteResourceShareCreatedFromPolicyResponse *shared.PromoteResourceShareCreatedFromPolicyResponse
	ResourceShareLimitExceededException           *interface{}
	ServerInternalException                       *interface{}
	ServiceUnavailableException                   *interface{}
	StatusCode                                    int64
	UnknownResourceException                      *interface{}
}
