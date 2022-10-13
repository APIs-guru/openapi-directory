package operations

type GetListTagsForResourceActionEnum string

const (
	GetListTagsForResourceActionEnumListTagsForResource GetListTagsForResourceActionEnum = "ListTagsForResource"
)

type GetListTagsForResourceVersionEnum string

const (
	GetListTagsForResourceVersionEnumTwoThousandAndTen0801 GetListTagsForResourceVersionEnum = "2010-08-01"
)

type GetListTagsForResourceQueryParams struct {
	Action      GetListTagsForResourceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ResourceArn string                            `queryParam:"style=form,explode=true,name=ResourceARN"`
	Version     GetListTagsForResourceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListTagsForResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListTagsForResourceRequest struct {
	QueryParams GetListTagsForResourceQueryParams
	Headers     GetListTagsForResourceHeaders
}

type GetListTagsForResourceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
