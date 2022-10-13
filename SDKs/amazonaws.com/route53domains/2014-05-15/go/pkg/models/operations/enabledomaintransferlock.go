package operations

import (
	"openapi/pkg/models/shared"
)

type EnableDomainTransferLockXAmzTargetEnum string

const (
	EnableDomainTransferLockXAmzTargetEnumRoute53DomainsV20140515EnableDomainTransferLock EnableDomainTransferLockXAmzTargetEnum = "Route53Domains_v20140515.EnableDomainTransferLock"
)

type EnableDomainTransferLockHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableDomainTransferLockXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type EnableDomainTransferLockRequest struct {
	Headers EnableDomainTransferLockHeaders
	Request shared.EnableDomainTransferLockRequest `request:"mediaType=application/json"`
}

type EnableDomainTransferLockResponse struct {
	ContentType                      string
	DuplicateRequest                 *interface{}
	EnableDomainTransferLockResponse *shared.EnableDomainTransferLockResponse
	InvalidInput                     *interface{}
	OperationLimitExceeded           *interface{}
	StatusCode                       int64
	TldRulesViolation                *interface{}
	UnsupportedTld                   *interface{}
}
