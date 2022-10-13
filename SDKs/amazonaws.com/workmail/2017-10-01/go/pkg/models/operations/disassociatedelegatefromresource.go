package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateDelegateFromResourceXAmzTargetEnum string

const (
	DisassociateDelegateFromResourceXAmzTargetEnumWorkMailServiceDisassociateDelegateFromResource DisassociateDelegateFromResourceXAmzTargetEnum = "WorkMailService.DisassociateDelegateFromResource"
)

type DisassociateDelegateFromResourceHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateDelegateFromResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateDelegateFromResourceRequest struct {
	Headers DisassociateDelegateFromResourceHeaders
	Request shared.DisassociateDelegateFromResourceRequest `request:"mediaType=application/json"`
}

type DisassociateDelegateFromResourceResponse struct {
	ContentType                              string
	DisassociateDelegateFromResourceResponse map[string]interface{}
	EntityNotFoundException                  *interface{}
	EntityStateException                     *interface{}
	InvalidParameterException                *interface{}
	OrganizationNotFoundException            *interface{}
	OrganizationStateException               *interface{}
	StatusCode                               int64
}
