package operations

import (
	"openapi/pkg/models/shared"
)

type PutInventoryXAmzTargetEnum string

const (
	PutInventoryXAmzTargetEnumAmazonSsmPutInventory PutInventoryXAmzTargetEnum = "AmazonSSM.PutInventory"
)

type PutInventoryHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutInventoryXAmzTargetEnum `header:"name=X-Amz-Target"`
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
