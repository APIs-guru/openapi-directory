package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteInventoryXAmzTargetEnum string

const (
	DeleteInventoryXAmzTargetEnumAmazonSsmDeleteInventory DeleteInventoryXAmzTargetEnum = "AmazonSSM.DeleteInventory"
)

type DeleteInventoryHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteInventoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
