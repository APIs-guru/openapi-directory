package operations

type PostCreateTagsActionEnum string

const (
	PostCreateTagsActionEnumCreateTags PostCreateTagsActionEnum = "CreateTags"
)

type PostCreateTagsVersionEnum string

const (
	PostCreateTagsVersionEnumTwoThousandAndTwelve1201 PostCreateTagsVersionEnum = "2012-12-01"
)

type PostCreateTagsQueryParams struct {
	Action  PostCreateTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateTagsRequest struct {
	QueryParams PostCreateTagsQueryParams
	Headers     PostCreateTagsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
