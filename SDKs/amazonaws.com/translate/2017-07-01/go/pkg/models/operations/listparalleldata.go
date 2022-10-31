package operations

import (
	"openapi/pkg/models/shared"
)

type ListParallelDataQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListParallelDataXAmzTargetEnum string

const (
	ListParallelDataXAmzTargetEnumAwsShineFrontendService20170701ListParallelData ListParallelDataXAmzTargetEnum = "AWSShineFrontendService_20170701.ListParallelData"
)

type ListParallelDataHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListParallelDataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListParallelDataRequest struct {
	QueryParams ListParallelDataQueryParams
	Headers     ListParallelDataHeaders
	Request     shared.ListParallelDataRequest `request:"mediaType=application/json"`
}

type ListParallelDataResponse struct {
	ContentType                    string
	InternalServerException        *interface{}
	InvalidParameterValueException *interface{}
	ListParallelDataResponse       *shared.ListParallelDataResponse
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
