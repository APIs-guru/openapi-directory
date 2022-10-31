package operations

import (
	"openapi/pkg/models/shared"
)

type GetProductsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetProductsXAmzTargetEnum string

const (
	GetProductsXAmzTargetEnumAwsPriceListServiceGetProducts GetProductsXAmzTargetEnum = "AWSPriceListService.GetProducts"
)

type GetProductsHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetProductsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetProductsRequest struct {
	QueryParams GetProductsQueryParams
	Headers     GetProductsHeaders
	Request     shared.GetProductsRequest `request:"mediaType=application/json"`
}

type GetProductsResponse struct {
	ContentType               string
	ExpiredNextTokenException *interface{}
	GetProductsResponse       *shared.GetProductsResponse
	InternalErrorException    *interface{}
	InvalidNextTokenException *interface{}
	InvalidParameterException *interface{}
	NotFoundException         *interface{}
	StatusCode                int64
}
