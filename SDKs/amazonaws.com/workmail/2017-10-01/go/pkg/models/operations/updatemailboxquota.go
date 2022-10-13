package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMailboxQuotaXAmzTargetEnum string

const (
	UpdateMailboxQuotaXAmzTargetEnumWorkMailServiceUpdateMailboxQuota UpdateMailboxQuotaXAmzTargetEnum = "WorkMailService.UpdateMailboxQuota"
)

type UpdateMailboxQuotaHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateMailboxQuotaXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateMailboxQuotaRequest struct {
	Headers UpdateMailboxQuotaHeaders
	Request shared.UpdateMailboxQuotaRequest `request:"mediaType=application/json"`
}

type UpdateMailboxQuotaResponse struct {
	ContentType                   string
	EntityNotFoundException       *interface{}
	EntityStateException          *interface{}
	InvalidParameterException     *interface{}
	OrganizationNotFoundException *interface{}
	OrganizationStateException    *interface{}
	StatusCode                    int64
	UpdateMailboxQuotaResponse    map[string]interface{}
}
