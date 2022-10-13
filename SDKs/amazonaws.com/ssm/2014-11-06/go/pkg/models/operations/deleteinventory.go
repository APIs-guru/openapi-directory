package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteInventoryXAmzTargetEnum string

const (
	DeleteInventoryXAmzTargetEnumAmazonSsmDeleteInventory DeleteInventoryXAmzTargetEnum = "AmazonSSM.DeleteInventory"
)

type DeleteInventoryHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteInventoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteInventoryRequest struct {
	Headers DeleteInventoryHeaders
	Request shared.DeleteInventoryRequest `request:"mediaType=application/json"`
}

type DeleteInventoryResponse struct {
	ContentType                               string
	DeleteInventoryResult                     *shared.DeleteInventoryResult
	InternalServerError                       *interface{}
	InvalidDeleteInventoryParametersException *interface{}
	InvalidInventoryRequestException          *interface{}
	InvalidOptionException                    *interface{}
	InvalidTypeNameException                  *interface{}
	StatusCode                                int64
}
