package operations

type PostDeauthorizeDataShareActionEnum string

const (
	PostDeauthorizeDataShareActionEnumDeauthorizeDataShare PostDeauthorizeDataShareActionEnum = "DeauthorizeDataShare"
)

type PostDeauthorizeDataShareVersionEnum string

const (
	PostDeauthorizeDataShareVersionEnumTwoThousandAndTwelve1201 PostDeauthorizeDataShareVersionEnum = "2012-12-01"
)

type PostDeauthorizeDataShareQueryParams struct {
	Action  PostDeauthorizeDataShareActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeauthorizeDataShareVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeauthorizeDataShareHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeauthorizeDataShareRequest struct {
	QueryParams PostDeauthorizeDataShareQueryParams
	Headers     PostDeauthorizeDataShareHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeauthorizeDataShareResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
