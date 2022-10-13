package operations

type PostListQueuesActionEnum string

const (
	PostListQueuesActionEnumListQueues PostListQueuesActionEnum = "ListQueues"
)

type PostListQueuesVersionEnum string

const (
	PostListQueuesVersionEnumTwoThousandAndTwelve1105 PostListQueuesVersionEnum = "2012-11-05"
)

type PostListQueuesQueryParams struct {
	Action     PostListQueuesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                   `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                   `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostListQueuesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListQueuesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListQueuesRequest struct {
	QueryParams PostListQueuesQueryParams
	Headers     PostListQueuesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListQueuesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
