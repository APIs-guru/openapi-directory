package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateOpsItemRelatedItemXAmzTargetEnum string

const (
	DisassociateOpsItemRelatedItemXAmzTargetEnumAmazonSsmDisassociateOpsItemRelatedItem DisassociateOpsItemRelatedItemXAmzTargetEnum = "AmazonSSM.DisassociateOpsItemRelatedItem"
)

type DisassociateOpsItemRelatedItemHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateOpsItemRelatedItemXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateOpsItemRelatedItemRequest struct {
	Headers DisassociateOpsItemRelatedItemHeaders
	Request shared.DisassociateOpsItemRelatedItemRequest `request:"mediaType=application/json"`
}

type DisassociateOpsItemRelatedItemResponse struct {
	ContentType                                    string
	DisassociateOpsItemRelatedItemResponse         map[string]interface{}
	InternalServerError                            *interface{}
	OpsItemInvalidParameterException               *interface{}
	OpsItemNotFoundException                       *interface{}
	OpsItemRelatedItemAssociationNotFoundException *interface{}
	StatusCode                                     int64
}
