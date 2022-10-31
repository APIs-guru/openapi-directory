package operations

type PostDeleteHsmClientCertificateActionEnum string

const (
	PostDeleteHsmClientCertificateActionEnumDeleteHsmClientCertificate PostDeleteHsmClientCertificateActionEnum = "DeleteHsmClientCertificate"
)

type PostDeleteHsmClientCertificateVersionEnum string

const (
	PostDeleteHsmClientCertificateVersionEnumTwoThousandAndTwelve1201 PostDeleteHsmClientCertificateVersionEnum = "2012-12-01"
)

type PostDeleteHsmClientCertificateQueryParams struct {
	Action  PostDeleteHsmClientCertificateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteHsmClientCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteHsmClientCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteHsmClientCertificateRequest struct {
	QueryParams PostDeleteHsmClientCertificateQueryParams
	Headers     PostDeleteHsmClientCertificateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteHsmClientCertificateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
