package operations

import (
	"openapi/pkg/models/shared"
)

type PutInventoryXAmzTargetEnum string

const (
	PutInventoryXAmzTargetEnumAmazonSsmPutInventory PutInventoryXAmzTargetEnum = "AmazonSSM.PutInventory"
)

type PutInventoryHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutInventoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutInventoryRequest struct {
	Headers PutInventoryHeaders
	Request shared.PutInventoryRequest `request:"mediaType=application/json"`
}

type PutInventoryResponse struct {
	ContentType                                string
	CustomSchemaCountLimitExceededException    *interface{}
	InternalServerError                        *interface{}
	InvalidInstanceID                          *interface{}
	InvalidInventoryItemContextException       *interface{}
	InvalidItemContentException                *interface{}
	InvalidTypeNameException                   *interface{}
	ItemContentMismatchException               *interface{}
	ItemSizeLimitExceededException             *interface{}
	PutInventoryResult                         *shared.PutInventoryResult
	StatusCode                                 int64
	SubTypeCountLimitExceededException         *interface{}
	TotalSizeLimitExceededException            *interface{}
	UnsupportedInventoryItemContextException   *interface{}
	UnsupportedInventorySchemaVersionException *interface{}
}
