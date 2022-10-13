package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTagsForDomainXAmzTargetEnum string

const (
	DeleteTagsForDomainXAmzTargetEnumRoute53DomainsV20140515DeleteTagsForDomain DeleteTagsForDomainXAmzTargetEnum = "Route53Domains_v20140515.DeleteTagsForDomain"
)

type DeleteTagsForDomainHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteTagsForDomainXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteTagsForDomainRequest struct {
	Headers DeleteTagsForDomainHeaders
	Request shared.DeleteTagsForDomainRequest `request:"mediaType=application/json"`
}

type DeleteTagsForDomainResponse struct {
	ContentType                 string
	DeleteTagsForDomainResponse map[string]interface{}
	InvalidInput                *interface{}
	OperationLimitExceeded      *interface{}
	StatusCode                  int64
	UnsupportedTld              *interface{}
}
