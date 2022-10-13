package operations

type PostDescribeStorageActionEnum string

const (
	PostDescribeStorageActionEnumDescribeStorage PostDescribeStorageActionEnum = "DescribeStorage"
)

type PostDescribeStorageVersionEnum string

const (
	PostDescribeStorageVersionEnumTwoThousandAndTwelve1201 PostDescribeStorageVersionEnum = "2012-12-01"
)

type PostDescribeStorageQueryParams struct {
	Action  PostDescribeStorageActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeStorageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeStorageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeStorageRequest struct {
	QueryParams PostDescribeStorageQueryParams
	Headers     PostDescribeStorageHeaders
}

type PostDescribeStorageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
