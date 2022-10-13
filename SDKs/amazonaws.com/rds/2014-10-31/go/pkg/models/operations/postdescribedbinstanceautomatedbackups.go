package operations

type PostDescribeDbInstanceAutomatedBackupsActionEnum string

const (
	PostDescribeDbInstanceAutomatedBackupsActionEnumDescribeDbInstanceAutomatedBackups PostDescribeDbInstanceAutomatedBackupsActionEnum = "DescribeDBInstanceAutomatedBackups"
)

type PostDescribeDbInstanceAutomatedBackupsVersionEnum string

const (
	PostDescribeDbInstanceAutomatedBackupsVersionEnumTwoThousandAndFourteen1031 PostDescribeDbInstanceAutomatedBackupsVersionEnum = "2014-10-31"
)

type PostDescribeDbInstanceAutomatedBackupsQueryParams struct {
	Action     PostDescribeDbInstanceAutomatedBackupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                           `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                           `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeDbInstanceAutomatedBackupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDbInstanceAutomatedBackupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeDbInstanceAutomatedBackupsRequest struct {
	QueryParams PostDescribeDbInstanceAutomatedBackupsQueryParams
	Headers     PostDescribeDbInstanceAutomatedBackupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDbInstanceAutomatedBackupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
