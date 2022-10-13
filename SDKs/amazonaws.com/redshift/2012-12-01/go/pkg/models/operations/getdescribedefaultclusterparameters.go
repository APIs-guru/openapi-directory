package operations

type GetDescribeDefaultClusterParametersActionEnum string

const (
	GetDescribeDefaultClusterParametersActionEnumDescribeDefaultClusterParameters GetDescribeDefaultClusterParametersActionEnum = "DescribeDefaultClusterParameters"
)

type GetDescribeDefaultClusterParametersVersionEnum string

const (
	GetDescribeDefaultClusterParametersVersionEnumTwoThousandAndTwelve1201 GetDescribeDefaultClusterParametersVersionEnum = "2012-12-01"
)

type GetDescribeDefaultClusterParametersQueryParams struct {
	Action               GetDescribeDefaultClusterParametersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker               *string                                        `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords           *int64                                         `queryParam:"style=form,explode=true,name=MaxRecords"`
	ParameterGroupFamily string                                         `queryParam:"style=form,explode=true,name=ParameterGroupFamily"`
	Version              GetDescribeDefaultClusterParametersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeDefaultClusterParametersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeDefaultClusterParametersRequest struct {
	QueryParams GetDescribeDefaultClusterParametersQueryParams
	Headers     GetDescribeDefaultClusterParametersHeaders
}

type GetDescribeDefaultClusterParametersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
