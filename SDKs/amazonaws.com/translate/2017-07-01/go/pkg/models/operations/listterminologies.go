package operations

import (
	"openapi/pkg/models/shared"
)

type ListTerminologiesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTerminologiesXAmzTargetEnum string

const (
	ListTerminologiesXAmzTargetEnumAwsShineFrontendService20170701ListTerminologies ListTerminologiesXAmzTargetEnum = "AWSShineFrontendService_20170701.ListTerminologies"
)

type ListTerminologiesHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTerminologiesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListTerminologiesRequest struct {
	QueryParams ListTerminologiesQueryParams
	Headers     ListTerminologiesHeaders
	Request     shared.ListTerminologiesRequest `request:"mediaType=application/json"`
}

type ListTerminologiesResponse struct {
	ContentType                    string
	InternalServerException        *interface{}
	InvalidParameterValueException *interface{}
	ListTerminologiesResponse      *shared.ListTerminologiesResponse
	StatusCode                     int64
	TooManyRequestsException       *interface{}
}
