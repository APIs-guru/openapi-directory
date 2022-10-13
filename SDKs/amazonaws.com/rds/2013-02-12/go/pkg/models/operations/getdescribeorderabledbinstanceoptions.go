package operations

type GetDescribeOrderableDbInstanceOptionsActionEnum string

const (
	GetDescribeOrderableDbInstanceOptionsActionEnumDescribeOrderableDbInstanceOptions GetDescribeOrderableDbInstanceOptionsActionEnum = "DescribeOrderableDBInstanceOptions"
)

type GetDescribeOrderableDbInstanceOptionsVersionEnum string

const (
	GetDescribeOrderableDbInstanceOptionsVersionEnumTwoThousandAndThirteen0212 GetDescribeOrderableDbInstanceOptionsVersionEnum = "2013-02-12"
)

type GetDescribeOrderableDbInstanceOptionsQueryParams struct {
	Action          GetDescribeOrderableDbInstanceOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbInstanceClass *string                                          `queryParam:"style=form,explode=true,name=DBInstanceClass"`
	Engine          string                                           `queryParam:"style=form,explode=true,name=Engine"`
	EngineVersion   *string                                          `queryParam:"style=form,explode=true,name=EngineVersion"`
	LicenseModel    *string                                          `queryParam:"style=form,explode=true,name=LicenseModel"`
	Marker          *string                                          `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords      *int64                                           `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version         GetDescribeOrderableDbInstanceOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	Vpc             *bool                                            `queryParam:"style=form,explode=true,name=Vpc"`
}

type GetDescribeOrderableDbInstanceOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeOrderableDbInstanceOptionsRequest struct {
	QueryParams GetDescribeOrderableDbInstanceOptionsQueryParams
	Headers     GetDescribeOrderableDbInstanceOptionsHeaders
}

type GetDescribeOrderableDbInstanceOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
