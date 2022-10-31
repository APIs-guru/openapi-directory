package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAddressesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeAddressesXAmzTargetEnum string

const (
	DescribeAddressesXAmzTargetEnumAwsieSnowballJobManagementServiceDescribeAddresses DescribeAddressesXAmzTargetEnum = "AWSIESnowballJobManagementService.DescribeAddresses"
)

type DescribeAddressesHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAddressesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeAddressesRequest struct {
	QueryParams DescribeAddressesQueryParams
	Headers     DescribeAddressesHeaders
	Request     shared.DescribeAddressesRequest `request:"mediaType=application/json"`
}

type DescribeAddressesResponse struct {
	ContentType               string
	DescribeAddressesResult   *shared.DescribeAddressesResult
	InvalidNextTokenException *interface{}
	InvalidResourceException  *interface{}
	StatusCode                int64
}
