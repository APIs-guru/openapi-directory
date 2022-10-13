package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateOpsItemXAmzTargetEnum string

const (
	UpdateOpsItemXAmzTargetEnumAmazonSsmUpdateOpsItem UpdateOpsItemXAmzTargetEnum = "AmazonSSM.UpdateOpsItem"
)

type UpdateOpsItemHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateOpsItemXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateOpsItemRequest struct {
	Headers UpdateOpsItemHeaders
	Request shared.UpdateOpsItemRequest `request:"mediaType=application/json"`
}

type UpdateOpsItemResponse struct {
	ContentType                      string
	InternalServerError              *interface{}
	OpsItemAlreadyExistsException    *interface{}
	OpsItemInvalidParameterException *interface{}
	OpsItemLimitExceededException    *interface{}
	OpsItemNotFoundException         *interface{}
	StatusCode                       int64
	UpdateOpsItemResponse            map[string]interface{}
}
