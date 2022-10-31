package operations

type PostGetAccessKeyInfoActionEnum string

const (
	PostGetAccessKeyInfoActionEnumGetAccessKeyInfo PostGetAccessKeyInfoActionEnum = "GetAccessKeyInfo"
)

type PostGetAccessKeyInfoVersionEnum string

const (
	PostGetAccessKeyInfoVersionEnumTwoThousandAndEleven0615 PostGetAccessKeyInfoVersionEnum = "2011-06-15"
)

type PostGetAccessKeyInfoQueryParams struct {
	Action  PostGetAccessKeyInfoActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetAccessKeyInfoVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetAccessKeyInfoHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostGetAccessKeyInfoRequest struct {
	QueryParams PostGetAccessKeyInfoQueryParams
	Headers     PostGetAccessKeyInfoHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetAccessKeyInfoResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
