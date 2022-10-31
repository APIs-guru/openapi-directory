package operations

import (
	"openapi/pkg/models/shared"
)

type ListProvisionedConcurrencyConfigsPathParams struct {
	FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
}

type ListProvisionedConcurrencyConfigsListEnum string

const (
	ListProvisionedConcurrencyConfigsListEnumAll ListProvisionedConcurrencyConfigsListEnum = "ALL"
)

type ListProvisionedConcurrencyConfigsQueryParams struct {
	List     ListProvisionedConcurrencyConfigsListEnum `queryParam:"style=form,explode=true,name=List"`
	Marker   *string                                   `queryParam:"style=form,explode=true,name=Marker"`
	MaxItems *int64                                    `queryParam:"style=form,explode=true,name=MaxItems"`
}

type ListProvisionedConcurrencyConfigsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListProvisionedConcurrencyConfigsRequest struct {
	PathParams  ListProvisionedConcurrencyConfigsPathParams
	QueryParams ListProvisionedConcurrencyConfigsQueryParams
	Headers     ListProvisionedConcurrencyConfigsHeaders
}

type ListProvisionedConcurrencyConfigsResponse struct {
	ContentType                               string
	InvalidParameterValueException            *interface{}
	ListProvisionedConcurrencyConfigsResponse *shared.ListProvisionedConcurrencyConfigsResponse
	ResourceNotFoundException                 *interface{}
	ServiceException                          *interface{}
	StatusCode                                int64
	TooManyRequestsException                  *interface{}
}
