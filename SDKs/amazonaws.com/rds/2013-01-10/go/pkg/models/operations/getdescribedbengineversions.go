package operations

type GetDescribeDbEngineVersionsActionEnum string

const (
	GetDescribeDbEngineVersionsActionEnumDescribeDbEngineVersions GetDescribeDbEngineVersionsActionEnum = "DescribeDBEngineVersions"
)

type GetDescribeDbEngineVersionsVersionEnum string

const (
	GetDescribeDbEngineVersionsVersionEnumTwoThousandAndThirteen0110 GetDescribeDbEngineVersionsVersionEnum = "2013-01-10"
)

type GetDescribeDbEngineVersionsQueryParams struct {
	Action                     GetDescribeDbEngineVersionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbParameterGroupFamily     *string                                `queryParam:"style=form,explode=true,name=DBParameterGroupFamily"`
	DefaultOnly                *bool                                  `queryParam:"style=form,explode=true,name=DefaultOnly"`
	Engine                     *string                                `queryParam:"style=form,explode=true,name=Engine"`
	EngineVersion              *string                                `queryParam:"style=form,explode=true,name=EngineVersion"`
	ListSupportedCharacterSets *bool                                  `queryParam:"style=form,explode=true,name=ListSupportedCharacterSets"`
	Marker                     *string                                `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords                 *int64                                 `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version                    GetDescribeDbEngineVersionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeDbEngineVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeDbEngineVersionsRequest struct {
	QueryParams GetDescribeDbEngineVersionsQueryParams
	Headers     GetDescribeDbEngineVersionsHeaders
}

type GetDescribeDbEngineVersionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
