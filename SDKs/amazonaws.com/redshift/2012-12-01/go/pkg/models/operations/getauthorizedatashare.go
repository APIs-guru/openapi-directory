package operations

type GetAuthorizeDataShareActionEnum string

const (
	GetAuthorizeDataShareActionEnumAuthorizeDataShare GetAuthorizeDataShareActionEnum = "AuthorizeDataShare"
)

type GetAuthorizeDataShareVersionEnum string

const (
	GetAuthorizeDataShareVersionEnumTwoThousandAndTwelve1201 GetAuthorizeDataShareVersionEnum = "2012-12-01"
)

type GetAuthorizeDataShareQueryParams struct {
	Action             GetAuthorizeDataShareActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ConsumerIdentifier string                           `queryParam:"style=form,explode=true,name=ConsumerIdentifier"`
	DataShareArn       string                           `queryParam:"style=form,explode=true,name=DataShareArn"`
	Version            GetAuthorizeDataShareVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAuthorizeDataShareHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAuthorizeDataShareRequest struct {
	QueryParams GetAuthorizeDataShareQueryParams
	Headers     GetAuthorizeDataShareHeaders
}

type GetAuthorizeDataShareResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
