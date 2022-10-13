package operations

import (
	"openapi/pkg/models/shared"
)

type ListHumanTaskUisQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListHumanTaskUisXAmzTargetEnum string

const (
	ListHumanTaskUisXAmzTargetEnumSageMakerListHumanTaskUis ListHumanTaskUisXAmzTargetEnum = "SageMaker.ListHumanTaskUis"
)

type ListHumanTaskUisHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListHumanTaskUisXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListHumanTaskUisRequest struct {
	QueryParams ListHumanTaskUisQueryParams
	Headers     ListHumanTaskUisHeaders
	Request     shared.ListHumanTaskUisRequest `request:"mediaType=application/json"`
}

type ListHumanTaskUisResponse struct {
	ContentType              string
	ListHumanTaskUisResponse *shared.ListHumanTaskUisResponse
	StatusCode               int64
}
