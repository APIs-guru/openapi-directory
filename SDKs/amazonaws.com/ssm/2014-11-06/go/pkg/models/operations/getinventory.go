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
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetInventoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
