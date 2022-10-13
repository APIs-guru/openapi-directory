package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTagsForDomainXAmzTargetEnum string

const (
	UpdateTagsForDomainXAmzTargetEnumRoute53DomainsV20140515UpdateTagsForDomain UpdateTagsForDomainXAmzTargetEnum = "Route53Domains_v20140515.UpdateTagsForDomain"
)

type UpdateTagsForDomainHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateTagsForDomainXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateTagsForDomainRequest struct {
	Headers UpdateTagsForDomainHeaders
	Request shared.UpdateTagsForDomainRequest `request:"mediaType=application/json"`
}

type UpdateTagsForDomainResponse struct {
	ContentType                 string
	InvalidInput                *interface{}
	OperationLimitExceeded      *interface{}
	StatusCode                  int64
	UnsupportedTld              *interface{}
	UpdateTagsForDomainResponse map[string]interface{}
}
