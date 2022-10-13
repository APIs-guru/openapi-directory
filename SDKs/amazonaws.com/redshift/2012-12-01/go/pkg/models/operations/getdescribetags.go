package operations

type GetDescribeTagsActionEnum string

const (
	GetDescribeTagsActionEnumDescribeTags GetDescribeTagsActionEnum = "DescribeTags"
)

type GetDescribeTagsVersionEnum string

const (
	GetDescribeTagsVersionEnumTwoThousandAndTwelve1201 GetDescribeTagsVersionEnum = "2012-12-01"
)

type GetDescribeTagsQueryParams struct {
	Action       GetDescribeTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker       *string                    `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords   *int64                     `queryParam:"style=form,explode=true,name=MaxRecords"`
	ResourceName *string                    `queryParam:"style=form,explode=true,name=ResourceName"`
	ResourceType *string                    `queryParam:"style=form,explode=true,name=ResourceType"`
	TagKeys      []string                   `queryParam:"style=form,explode=true,name=TagKeys"`
	TagValues    []string                   `queryParam:"style=form,explode=true,name=TagValues"`
	Version      GetDescribeTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeTagsRequest struct {
	QueryParams GetDescribeTagsQueryParams
	Headers     GetDescribeTagsHeaders
}

type GetDescribeTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
