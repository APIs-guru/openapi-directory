package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDomainHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeDomainRequestBody struct {
	DomainName string `json:"DomainName"`
	FleetArn   string `json:"FleetArn"`
}

type DescribeDomainRequest struct {
	Headers DescribeDomainHeaders
	Request DescribeDomainRequestBody `request:"mediaType=application/json"`
}

type DescribeDomainResponse struct {
	ContentType                  string
	DescribeDomainResponse       *shared.DescribeDomainResponse
	InternalServerErrorException *interface{}
	InvalidRequestException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UnauthorizedException        *interface{}
}
