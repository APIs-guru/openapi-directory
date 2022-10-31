package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateOpsItemRelatedItemXAmzTargetEnum string

const (
	AssociateOpsItemRelatedItemXAmzTargetEnumAmazonSsmAssociateOpsItemRelatedItem AssociateOpsItemRelatedItemXAmzTargetEnum = "AmazonSSM.AssociateOpsItemRelatedItem"
)

type AssociateOpsItemRelatedItemHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateOpsItemRelatedItemXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AssociateOpsItemRelatedItemRequest struct {
	Headers AssociateOpsItemRelatedItemHeaders
	Request shared.AssociateOpsItemRelatedItemRequest `request:"mediaType=application/json"`
}

type AssociateOpsItemRelatedItemResponse struct {
	AssociateOpsItemRelatedItemResponse      *shared.AssociateOpsItemRelatedItemResponse
	ContentType                              string
	InternalServerError                      *interface{}
	OpsItemInvalidParameterException         *interface{}
	OpsItemLimitExceededException            *interface{}
	OpsItemNotFoundException                 *interface{}
	OpsItemRelatedItemAlreadyExistsException *interface{}
	StatusCode                               int64
}
