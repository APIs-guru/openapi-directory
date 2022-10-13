package operations

import (
	"openapi/pkg/models/shared"
)

type GetOpsItemXAmzTargetEnum string

const (
	GetOpsItemXAmzTargetEnumAmazonSsmGetOpsItem GetOpsItemXAmzTargetEnum = "AmazonSSM.GetOpsItem"
)

type GetOpsItemHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetOpsItemXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetOpsItemRequest struct {
	Headers GetOpsItemHeaders
	Request shared.GetOpsItemRequest `request:"mediaType=application/json"`
}

type GetOpsItemResponse struct {
	ContentType              string
	GetOpsItemResponse       *shared.GetOpsItemResponse
	InternalServerError      *interface{}
	OpsItemNotFoundException *interface{}
	StatusCode               int64
}
