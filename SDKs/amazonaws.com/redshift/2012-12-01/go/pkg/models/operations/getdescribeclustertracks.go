package operations

type GetDescribeClusterTracksActionEnum string

const (
	GetDescribeClusterTracksActionEnumDescribeClusterTracks GetDescribeClusterTracksActionEnum = "DescribeClusterTracks"
)

type GetDescribeClusterTracksVersionEnum string

const (
	GetDescribeClusterTracksVersionEnumTwoThousandAndTwelve1201 GetDescribeClusterTracksVersionEnum = "2012-12-01"
)

type GetDescribeClusterTracksQueryParams struct {
	Action               GetDescribeClusterTracksActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaintenanceTrackName *string                             `queryParam:"style=form,explode=true,name=MaintenanceTrackName"`
	Marker               *string                             `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords           *int64                              `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version              GetDescribeClusterTracksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeClusterTracksHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeClusterTracksRequest struct {
	QueryParams GetDescribeClusterTracksQueryParams
	Headers     GetDescribeClusterTracksHeaders
}

type GetDescribeClusterTracksResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
