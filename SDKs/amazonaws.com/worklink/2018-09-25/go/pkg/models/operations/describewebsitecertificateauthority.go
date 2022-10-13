package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWebsiteCertificateAuthorityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeWebsiteCertificateAuthorityRequestBody struct {
	FleetArn    string `json:"FleetArn"`
	WebsiteCaID string `json:"WebsiteCaId"`
}

type DescribeWebsiteCertificateAuthorityRequest struct {
	Headers DescribeWebsiteCertificateAuthorityHeaders
	Request DescribeWebsiteCertificateAuthorityRequestBody `request:"mediaType=application/json"`
}

type DescribeWebsiteCertificateAuthorityResponse struct {
	ContentType                                 string
	DescribeWebsiteCertificateAuthorityResponse *shared.DescribeWebsiteCertificateAuthorityResponse
	InternalServerErrorException                *interface{}
	InvalidRequestException                     *interface{}
	ResourceNotFoundException                   *interface{}
	StatusCode                                  int64
	TooManyRequestsException                    *interface{}
	UnauthorizedException                       *interface{}
}
