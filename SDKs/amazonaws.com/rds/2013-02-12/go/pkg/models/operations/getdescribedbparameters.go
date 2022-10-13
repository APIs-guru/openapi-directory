package operations

type GetDescribeDbParametersActionEnum string

const (
	GetDescribeDbParametersActionEnumDescribeDbParameters GetDescribeDbParametersActionEnum = "DescribeDBParameters"
)

type GetDescribeDbParametersVersionEnum string

const (
	GetDescribeDbParametersVersionEnumTwoThousandAndThirteen0212 GetDescribeDbParametersVersionEnum = "2013-02-12"
)

type GetDescribeDbParametersQueryParams struct {
	Action               GetDescribeDbParametersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbParameterGroupName string                             `queryParam:"style=form,explode=true,name=DBParameterGroupName"`
	Marker               *string                            `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords           *int64                             `queryParam:"style=form,explode=true,name=MaxRecords"`
	Source               *string                            `queryParam:"style=form,explode=true,name=Source"`
	Version              GetDescribeDbParametersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeDbParametersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeDbParametersRequest struct {
	QueryParams GetDescribeDbParametersQueryParams
	Headers     GetDescribeDbParametersHeaders
}

type GetDescribeDbParametersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
