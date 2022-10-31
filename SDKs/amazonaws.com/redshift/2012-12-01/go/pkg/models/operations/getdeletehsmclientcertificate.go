package operations

type GetDeleteHsmClientCertificateActionEnum string

const (
	GetDeleteHsmClientCertificateActionEnumDeleteHsmClientCertificate GetDeleteHsmClientCertificateActionEnum = "DeleteHsmClientCertificate"
)

type GetDeleteHsmClientCertificateVersionEnum string

const (
	GetDeleteHsmClientCertificateVersionEnumTwoThousandAndTwelve1201 GetDeleteHsmClientCertificateVersionEnum = "2012-12-01"
)

type GetDeleteHsmClientCertificateQueryParams struct {
	Action                         GetDeleteHsmClientCertificateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	HsmClientCertificateIdentifier string                                   `queryParam:"style=form,explode=true,name=HsmClientCertificateIdentifier"`
	Version                        GetDeleteHsmClientCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteHsmClientCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteHsmClientCertificateRequest struct {
	QueryParams GetDeleteHsmClientCertificateQueryParams
	Headers     GetDeleteHsmClientCertificateHeaders
}

type GetDeleteHsmClientCertificateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
