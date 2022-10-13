package operations

type VerifySslCertificateRequestDomainValidationsPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type VerifySslCertificateRequestDomainValidationsRequest struct {
	PathParams VerifySslCertificateRequestDomainValidationsPathParams
}

type VerifySslCertificateRequestDomainValidationsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
