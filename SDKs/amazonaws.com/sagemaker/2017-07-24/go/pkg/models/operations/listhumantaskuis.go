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
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListHumanTaskUisXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
