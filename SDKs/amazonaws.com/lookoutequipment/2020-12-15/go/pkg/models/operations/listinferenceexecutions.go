package operations

import (
	"openapi/pkg/models/shared"
)

type ListInferenceExecutionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListInferenceExecutionsXAmzTargetEnum string

const (
	ListInferenceExecutionsXAmzTargetEnumAwsLookoutEquipmentFrontendServiceListInferenceExecutions ListInferenceExecutionsXAmzTargetEnum = "AWSLookoutEquipmentFrontendService.ListInferenceExecutions"
)

type ListInferenceExecutionsHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListInferenceExecutionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListInferenceExecutionsRequest struct {
	QueryParams ListInferenceExecutionsQueryParams
	Headers     ListInferenceExecutionsHeaders
	Request     shared.ListInferenceExecutionsRequest `request:"mediaType=application/json"`
}

type ListInferenceExecutionsResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	InternalServerException         *interface{}
	ListInferenceExecutionsResponse *shared.ListInferenceExecutionsResponse
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	ValidationException             *interface{}
}
