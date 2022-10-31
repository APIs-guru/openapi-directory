package operations

type GetDescribeDataSharesActionEnum string

const (
	GetDescribeDataSharesActionEnumDescribeDataShares GetDescribeDataSharesActionEnum = "DescribeDataShares"
)

type GetDescribeDataSharesVersionEnum string

const (
	GetDescribeDataSharesVersionEnumTwoThousandAndTwelve1201 GetDescribeDataSharesVersionEnum = "2012-12-01"
)

type GetDescribeDataSharesQueryParams struct {
	Action       GetDescribeDataSharesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DataShareArn *string                          `queryParam:"style=form,explode=true,name=DataShareArn"`
	Marker       *string                          `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords   *int64                           `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version      GetDescribeDataSharesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeDataSharesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeDataSharesRequest struct {
	QueryParams GetDescribeDataSharesQueryParams
	Headers     GetDescribeDataSharesHeaders
}

type GetDescribeDataSharesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
