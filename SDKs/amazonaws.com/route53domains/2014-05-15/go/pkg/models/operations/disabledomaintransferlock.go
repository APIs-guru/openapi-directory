package operations

import (
	"openapi/pkg/models/shared"
)

type DisableDomainTransferLockXAmzTargetEnum string

const (
	DisableDomainTransferLockXAmzTargetEnumRoute53DomainsV20140515DisableDomainTransferLock DisableDomainTransferLockXAmzTargetEnum = "Route53Domains_v20140515.DisableDomainTransferLock"
)

type DisableDomainTransferLockHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisableDomainTransferLockXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisableDomainTransferLockRequest struct {
	Headers DisableDomainTransferLockHeaders
	Request shared.DisableDomainTransferLockRequest `request:"mediaType=application/json"`
}

type DisableDomainTransferLockResponse struct {
	ContentType                       string
	DisableDomainTransferLockResponse *shared.DisableDomainTransferLockResponse
	DuplicateRequest                  *interface{}
	InvalidInput                      *interface{}
	OperationLimitExceeded            *interface{}
	StatusCode                        int64
	TldRulesViolation                 *interface{}
	UnsupportedTld                    *interface{}
}
