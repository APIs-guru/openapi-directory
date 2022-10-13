package operations

type GetDescribeClusterParametersActionEnum string

const (
	GetDescribeClusterParametersActionEnumDescribeClusterParameters GetDescribeClusterParametersActionEnum = "DescribeClusterParameters"
)

type GetDescribeClusterParametersVersionEnum string

const (
	GetDescribeClusterParametersVersionEnumTwoThousandAndTwelve1201 GetDescribeClusterParametersVersionEnum = "2012-12-01"
)

type GetDescribeClusterParametersQueryParams struct {
	Action             GetDescribeClusterParametersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker             *string                                 `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords         *int64                                  `queryParam:"style=form,explode=true,name=MaxRecords"`
	ParameterGroupName string                                  `queryParam:"style=form,explode=true,name=ParameterGroupName"`
	Source             *string                                 `queryParam:"style=form,explode=true,name=Source"`
	Version            GetDescribeClusterParametersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeClusterParametersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeClusterParametersRequest struct {
	QueryParams GetDescribeClusterParametersQueryParams
	Headers     GetDescribeClusterParametersHeaders
}

type GetDescribeClusterParametersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
