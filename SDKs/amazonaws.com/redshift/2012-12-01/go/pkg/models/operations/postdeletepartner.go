package operations

type PostDeletePartnerActionEnum string

const (
	PostDeletePartnerActionEnumDeletePartner PostDeletePartnerActionEnum = "DeletePartner"
)

type PostDeletePartnerVersionEnum string

const (
	PostDeletePartnerVersionEnumTwoThousandAndTwelve1201 PostDeletePartnerVersionEnum = "2012-12-01"
)

type PostDeletePartnerQueryParams struct {
	Action  PostDeletePartnerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeletePartnerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeletePartnerHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeletePartnerRequest struct {
	QueryParams PostDeletePartnerQueryParams
	Headers     PostDeletePartnerHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeletePartnerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
