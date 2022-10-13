package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteResourcePolicyPathParams struct {
	ResourceArn string `pathParam:"style=simple,explode=false,name=resourceArn"`
}

type DeleteResourcePolicyQueryParams struct {
	ExpectedRevisionID *string `queryParam:"style=form,explode=true,name=expectedRevisionId"`
}

type DeleteResourcePolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteResourcePolicyRequest struct {
	PathParams  DeleteResourcePolicyPathParams
	QueryParams DeleteResourcePolicyQueryParams
	Headers     DeleteResourcePolicyHeaders
}

type DeleteResourcePolicyResponse struct {
	ContentType                  string
	DeleteResourcePolicyResponse *shared.DeleteResourcePolicyResponse
	InternalServerException      *interface{}
	PreconditionFailedException  *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
}
