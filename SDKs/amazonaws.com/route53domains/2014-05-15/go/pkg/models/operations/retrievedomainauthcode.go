package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveDomainAuthCodeXAmzTargetEnum string

const (
	RetrieveDomainAuthCodeXAmzTargetEnumRoute53DomainsV20140515RetrieveDomainAuthCode RetrieveDomainAuthCodeXAmzTargetEnum = "Route53Domains_v20140515.RetrieveDomainAuthCode"
)

type RetrieveDomainAuthCodeHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RetrieveDomainAuthCodeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RetrieveDomainAuthCodeRequest struct {
	Headers RetrieveDomainAuthCodeHeaders
	Request shared.RetrieveDomainAuthCodeRequest `request:"mediaType=application/json"`
}

type RetrieveDomainAuthCodeResponse struct {
	ContentType                    string
	InvalidInput                   *interface{}
	RetrieveDomainAuthCodeResponse *shared.RetrieveDomainAuthCodeResponse
	StatusCode                     int64
	UnsupportedTld                 *interface{}
}
