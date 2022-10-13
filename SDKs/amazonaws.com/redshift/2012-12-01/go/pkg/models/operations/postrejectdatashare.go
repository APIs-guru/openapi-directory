package operations

type PostRejectDataShareActionEnum string

const (
	PostRejectDataShareActionEnumRejectDataShare PostRejectDataShareActionEnum = "RejectDataShare"
)

type PostRejectDataShareVersionEnum string

const (
	PostRejectDataShareVersionEnumTwoThousandAndTwelve1201 PostRejectDataShareVersionEnum = "2012-12-01"
)

type PostRejectDataShareQueryParams struct {
	Action  PostRejectDataShareActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRejectDataShareVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRejectDataShareHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRejectDataShareRequest struct {
	QueryParams PostRejectDataShareQueryParams
	Headers     PostRejectDataShareHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRejectDataShareResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
