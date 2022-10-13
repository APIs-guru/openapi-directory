package operations

type PostRemoveTagsFromResourceActionEnum string

const (
	PostRemoveTagsFromResourceActionEnumRemoveTagsFromResource PostRemoveTagsFromResourceActionEnum = "RemoveTagsFromResource"
)

type PostRemoveTagsFromResourceVersionEnum string

const (
	PostRemoveTagsFromResourceVersionEnumTwoThousandAndThirteen0212 PostRemoveTagsFromResourceVersionEnum = "2013-02-12"
)

type PostRemoveTagsFromResourceQueryParams struct {
	Action  PostRemoveTagsFromResourceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRemoveTagsFromResourceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRemoveTagsFromResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRemoveTagsFromResourceRequest struct {
	QueryParams PostRemoveTagsFromResourceQueryParams
	Headers     PostRemoveTagsFromResourceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRemoveTagsFromResourceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
