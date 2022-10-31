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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
