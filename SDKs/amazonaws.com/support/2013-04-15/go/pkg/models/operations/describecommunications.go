package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCommunicationsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeCommunicationsXAmzTargetEnum string

const (
	DescribeCommunicationsXAmzTargetEnumAwsSupport20130415DescribeCommunications DescribeCommunicationsXAmzTargetEnum = "AWSSupport_20130415.DescribeCommunications"
)

type DescribeCommunicationsHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCommunicationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeCommunicationsRequest struct {
	QueryParams DescribeCommunicationsQueryParams
	Headers     DescribeCommunicationsHeaders
	Request     shared.DescribeCommunicationsRequest `request:"mediaType=application/json"`
}

type DescribeCommunicationsResponse struct {
	CaseIDNotFound                 *interface{}
	ContentType                    string
	DescribeCommunicationsResponse *shared.DescribeCommunicationsResponse
	InternalServerError            *interface{}
	StatusCode                     int64
}
