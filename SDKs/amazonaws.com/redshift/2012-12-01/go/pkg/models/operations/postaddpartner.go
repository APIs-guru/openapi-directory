package operations

type PostAddPartnerActionEnum string

const (
	PostAddPartnerActionEnumAddPartner PostAddPartnerActionEnum = "AddPartner"
)

type PostAddPartnerVersionEnum string

const (
	PostAddPartnerVersionEnumTwoThousandAndTwelve1201 PostAddPartnerVersionEnum = "2012-12-01"
)

type PostAddPartnerQueryParams struct {
	Action  PostAddPartnerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAddPartnerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAddPartnerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAddPartnerRequest struct {
	QueryParams PostAddPartnerQueryParams
	Headers     PostAddPartnerHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAddPartnerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
