package operations

import (
	"openapi/pkg/models/shared"
)

type ListAssociationsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAssociationsXAmzTargetEnum string

const (
	ListAssociationsXAmzTargetEnumSageMakerListAssociations ListAssociationsXAmzTargetEnum = "SageMaker.ListAssociations"
)

type ListAssociationsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAssociationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAssociationsRequest struct {
	QueryParams ListAssociationsQueryParams
	Headers     ListAssociationsHeaders
	Request     shared.ListAssociationsRequest `request:"mediaType=application/json"`
}

type ListAssociationsResponse struct {
	ContentType              string
	ListAssociationsResponse *shared.ListAssociationsResponse
	ResourceNotFound         *interface{}
	StatusCode               int64
}
