package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateOpsItemRelatedItemXAmzTargetEnum string

const (
	AssociateOpsItemRelatedItemXAmzTargetEnumAmazonSsmAssociateOpsItemRelatedItem AssociateOpsItemRelatedItemXAmzTargetEnum = "AmazonSSM.AssociateOpsItemRelatedItem"
)

type AssociateOpsItemRelatedItemHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateOpsItemRelatedItemXAmzTargetEnum `header:"name=X-Amz-Target"`
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
