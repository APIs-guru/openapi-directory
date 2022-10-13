package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDomainContactPrivacyXAmzTargetEnum string

const (
	UpdateDomainContactPrivacyXAmzTargetEnumRoute53DomainsV20140515UpdateDomainContactPrivacy UpdateDomainContactPrivacyXAmzTargetEnum = "Route53Domains_v20140515.UpdateDomainContactPrivacy"
)

type UpdateDomainContactPrivacyHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDomainContactPrivacyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateDomainContactPrivacyRequest struct {
	Headers UpdateDomainContactPrivacyHeaders
	Request shared.UpdateDomainContactPrivacyRequest `request:"mediaType=application/json"`
}

type UpdateDomainContactPrivacyResponse struct {
	ContentType                        string
	DuplicateRequest                   *interface{}
	InvalidInput                       *interface{}
	OperationLimitExceeded             *interface{}
	StatusCode                         int64
	TldRulesViolation                  *interface{}
	UnsupportedTld                     *interface{}
	UpdateDomainContactPrivacyResponse *shared.UpdateDomainContactPrivacyResponse
}
