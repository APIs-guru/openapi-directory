package operations

import (
	"openapi/pkg/models/shared"
)

type GetInventorySchemaQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetInventorySchemaXAmzTargetEnum string

const (
	GetInventorySchemaXAmzTargetEnumAmazonSsmGetInventorySchema GetInventorySchemaXAmzTargetEnum = "AmazonSSM.GetInventorySchema"
)

type GetInventorySchemaHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetInventorySchemaXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetInventorySchemaRequest struct {
	QueryParams GetInventorySchemaQueryParams
	Headers     GetInventorySchemaHeaders
	Request     shared.GetInventorySchemaRequest `request:"mediaType=application/json"`
}

type GetInventorySchemaResponse struct {
	ContentType              string
	GetInventorySchemaResult *shared.GetInventorySchemaResult
	InternalServerError      *interface{}
	InvalidNextToken         *interface{}
	InvalidTypeNameException *interface{}
	StatusCode               int64
}
