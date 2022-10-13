package operations

type GetDeleteTagsActionEnum string

const (
	GetDeleteTagsActionEnumDeleteTags GetDeleteTagsActionEnum = "DeleteTags"
)

type GetDeleteTagsVersionEnum string

const (
	GetDeleteTagsVersionEnumTwoThousandAndTwelve1201 GetDeleteTagsVersionEnum = "2012-12-01"
)

type GetDeleteTagsQueryParams struct {
	Action       GetDeleteTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ResourceName string                   `queryParam:"style=form,explode=true,name=ResourceName"`
	TagKeys      []string                 `queryParam:"style=form,explode=true,name=TagKeys"`
	Version      GetDeleteTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteTagsRequest struct {
	QueryParams GetDeleteTagsQueryParams
	Headers     GetDeleteTagsHeaders
}

type GetDeleteTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
