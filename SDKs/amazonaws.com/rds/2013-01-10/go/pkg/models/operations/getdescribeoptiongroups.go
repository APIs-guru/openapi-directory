package operations

type GetDescribeOptionGroupsActionEnum string

const (
	GetDescribeOptionGroupsActionEnumDescribeOptionGroups GetDescribeOptionGroupsActionEnum = "DescribeOptionGroups"
)

type GetDescribeOptionGroupsVersionEnum string

const (
	GetDescribeOptionGroupsVersionEnumTwoThousandAndThirteen0110 GetDescribeOptionGroupsVersionEnum = "2013-01-10"
)

type GetDescribeOptionGroupsQueryParams struct {
	Action             GetDescribeOptionGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	EngineName         *string                            `queryParam:"style=form,explode=true,name=EngineName"`
	MajorEngineVersion *string                            `queryParam:"style=form,explode=true,name=MajorEngineVersion"`
	Marker             *string                            `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords         *int64                             `queryParam:"style=form,explode=true,name=MaxRecords"`
	OptionGroupName    *string                            `queryParam:"style=form,explode=true,name=OptionGroupName"`
	Version            GetDescribeOptionGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeOptionGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeOptionGroupsRequest struct {
	QueryParams GetDescribeOptionGroupsQueryParams
	Headers     GetDescribeOptionGroupsHeaders
}

type GetDescribeOptionGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
