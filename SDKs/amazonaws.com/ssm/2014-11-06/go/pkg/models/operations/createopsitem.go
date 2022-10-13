package operations

import (
	"openapi/pkg/models/shared"
)

type CreateOpsItemXAmzTargetEnum string

const (
	CreateOpsItemXAmzTargetEnumAmazonSsmCreateOpsItem CreateOpsItemXAmzTargetEnum = "AmazonSSM.CreateOpsItem"
)

type CreateOpsItemHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateOpsItemXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateOpsItemRequest struct {
	Headers CreateOpsItemHeaders
	Request shared.CreateOpsItemRequest `request:"mediaType=application/json"`
}

type CreateOpsItemResponse struct {
	ContentType                      string
	CreateOpsItemResponse            *shared.CreateOpsItemResponse
	InternalServerError              *interface{}
	OpsItemAlreadyExistsException    *interface{}
	OpsItemInvalidParameterException *interface{}
	OpsItemLimitExceededException    *interface{}
	StatusCode                       int64
}
