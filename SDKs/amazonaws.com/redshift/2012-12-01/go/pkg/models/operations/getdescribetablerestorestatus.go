package operations

type GetDescribeTableRestoreStatusActionEnum string

const (
	GetDescribeTableRestoreStatusActionEnumDescribeTableRestoreStatus GetDescribeTableRestoreStatusActionEnum = "DescribeTableRestoreStatus"
)

type GetDescribeTableRestoreStatusVersionEnum string

const (
	GetDescribeTableRestoreStatusVersionEnumTwoThousandAndTwelve1201 GetDescribeTableRestoreStatusVersionEnum = "2012-12-01"
)

type GetDescribeTableRestoreStatusQueryParams struct {
	Action                GetDescribeTableRestoreStatusActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier     *string                                  `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	Marker                *string                                  `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords            *int64                                   `queryParam:"style=form,explode=true,name=MaxRecords"`
	TableRestoreRequestID *string                                  `queryParam:"style=form,explode=true,name=TableRestoreRequestId"`
	Version               GetDescribeTableRestoreStatusVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeTableRestoreStatusHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeTableRestoreStatusRequest struct {
	QueryParams GetDescribeTableRestoreStatusQueryParams
	Headers     GetDescribeTableRestoreStatusHeaders
}

type GetDescribeTableRestoreStatusResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
