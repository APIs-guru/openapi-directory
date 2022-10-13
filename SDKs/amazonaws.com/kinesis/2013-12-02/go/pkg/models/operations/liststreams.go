package operations

import (
	"openapi/pkg/models/shared"
)

type ListStreamsQueryParams struct {
	ExclusiveStartStreamName *string `queryParam:"style=form,explode=true,name=ExclusiveStartStreamName"`
	Limit                    *string `queryParam:"style=form,explode=true,name=Limit"`
}

type ListStreamsXAmzTargetEnum string

const (
	ListStreamsXAmzTargetEnumKinesis20131202ListStreams ListStreamsXAmzTargetEnum = "Kinesis_20131202.ListStreams"
)

type ListStreamsHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListStreamsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListStreamsRequest struct {
	QueryParams ListStreamsQueryParams
	Headers     ListStreamsHeaders
	Request     shared.ListStreamsInput `request:"mediaType=application/json"`
}

type ListStreamsResponse struct {
	ContentType            string
	LimitExceededException *interface{}
	ListStreamsOutput      *shared.ListStreamsOutput
	StatusCode             int64
}
