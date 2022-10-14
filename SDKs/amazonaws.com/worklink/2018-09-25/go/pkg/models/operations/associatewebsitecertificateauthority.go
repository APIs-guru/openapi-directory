package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateWebsiteCertificateAuthorityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AssociateWebsiteCertificateAuthorityRequestBody struct {
	Certificate string  `json:"Certificate"`
	DisplayName *string `json:"DisplayName,omitempty"`
	FleetArn    string  `json:"FleetArn"`
}

type AssociateWebsiteCertificateAuthorityRequest struct {
	Headers AssociateWebsiteCertificateAuthorityHeaders
	Request AssociateWebsiteCertificateAuthorityRequestBody `request:"mediaType=application/json"`
}

type AssociateWebsiteCertificateAuthorityResponse struct {
	AssociateWebsiteCertificateAuthorityResponse *shared.AssociateWebsiteCertificateAuthorityResponse
	ContentType                                  string
	InternalServerErrorException                 *interface{}
	InvalidRequestException                      *interface{}
	ResourceAlreadyExistsException               *interface{}
	ResourceNotFoundException                    *interface{}
	StatusCode                                   int64
	TooManyRequestsException                     *interface{}
	UnauthorizedException                        *interface{}
}
