package operations

import (
	"openapi/pkg/models/shared"
)

type ListAttacksQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAttacksXAmzTargetEnum string

const (
	ListAttacksXAmzTargetEnumAwsShield20160616ListAttacks ListAttacksXAmzTargetEnum = "AWSShield_20160616.ListAttacks"
)

type ListAttacksHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAttacksXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListAttacksRequest struct {
	QueryParams ListAttacksQueryParams
	Headers     ListAttacksHeaders
	Request     shared.ListAttacksRequest `request:"mediaType=application/json"`
}

type ListAttacksResponse struct {
	ContentType               string
	InternalErrorException    *interface{}
	InvalidOperationException *interface{}
	InvalidParameterException *interface{}
	ListAttacksResponse       *shared.ListAttacksResponse
	StatusCode                int64
}
