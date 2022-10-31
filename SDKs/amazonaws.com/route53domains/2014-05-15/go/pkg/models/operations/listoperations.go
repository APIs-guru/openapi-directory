package operations

import (
	"openapi/pkg/models/shared"
)

type ListOperationsQueryParams struct {
	Marker   *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *string `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListOperationsXAmzTargetEnum string

const (
	ListOperationsXAmzTargetEnumRoute53DomainsV20140515ListOperations ListOperationsXAmzTargetEnum = "Route53Domains_v20140515.ListOperations"
)

type ListOperationsHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListOperationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListOperationsRequest struct {
	QueryParams ListOperationsQueryParams
	Headers     ListOperationsHeaders
	Request     shared.ListOperationsRequest `request:"mediaType=application/json"`
}

type ListOperationsResponse struct {
	ContentType            string
	InvalidInput           *interface{}
	ListOperationsResponse *shared.ListOperationsResponse
	StatusCode             int64
}
