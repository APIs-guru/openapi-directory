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
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetProductsXAmzTargetEnum `header:"name=X-Amz-Target"`
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
