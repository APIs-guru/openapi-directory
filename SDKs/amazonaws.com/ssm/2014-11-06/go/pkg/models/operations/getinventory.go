package operations

import (
	"openapi/pkg/models/shared"
)

type GetInventoryQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetInventoryXAmzTargetEnum string

const (
	GetInventoryXAmzTargetEnumAmazonSsmGetInventory GetInventoryXAmzTargetEnum = "AmazonSSM.GetInventory"
)

type GetInventoryHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetInventoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetInventoryRequest struct {
	QueryParams GetInventoryQueryParams
	Headers     GetInventoryHeaders
	Request     shared.GetInventoryRequest `request:"mediaType=application/json"`
}

type GetInventoryResponse struct {
	ContentType                     string
	GetInventoryResult              *shared.GetInventoryResult
	InternalServerError             *interface{}
	InvalidAggregatorException      *interface{}
	InvalidFilter                   *interface{}
	InvalidInventoryGroupException  *interface{}
	InvalidNextToken                *interface{}
	InvalidResultAttributeException *interface{}
	InvalidTypeNameException        *interface{}
	StatusCode                      int64
}
