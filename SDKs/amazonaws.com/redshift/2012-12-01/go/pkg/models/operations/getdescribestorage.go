package operations

type GetDescribeStorageActionEnum string

const (
	GetDescribeStorageActionEnumDescribeStorage GetDescribeStorageActionEnum = "DescribeStorage"
)

type GetDescribeStorageVersionEnum string

const (
	GetDescribeStorageVersionEnumTwoThousandAndTwelve1201 GetDescribeStorageVersionEnum = "2012-12-01"
)

type GetDescribeStorageQueryParams struct {
	Action  GetDescribeStorageActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetDescribeStorageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeStorageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeStorageRequest struct {
	QueryParams GetDescribeStorageQueryParams
	Headers     GetDescribeStorageHeaders
}

type GetDescribeStorageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
