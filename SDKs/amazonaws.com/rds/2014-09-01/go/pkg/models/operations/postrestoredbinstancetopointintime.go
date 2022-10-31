package operations

type PostRestoreDbInstanceToPointInTimeActionEnum string

const (
	PostRestoreDbInstanceToPointInTimeActionEnumRestoreDbInstanceToPointInTime PostRestoreDbInstanceToPointInTimeActionEnum = "RestoreDBInstanceToPointInTime"
)

type PostRestoreDbInstanceToPointInTimeVersionEnum string

const (
	PostRestoreDbInstanceToPointInTimeVersionEnumTwoThousandAndFourteen0901 PostRestoreDbInstanceToPointInTimeVersionEnum = "2014-09-01"
)

type PostRestoreDbInstanceToPointInTimeQueryParams struct {
	Action  PostRestoreDbInstanceToPointInTimeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRestoreDbInstanceToPointInTimeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRestoreDbInstanceToPointInTimeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostRestoreDbInstanceToPointInTimeRequest struct {
	QueryParams PostRestoreDbInstanceToPointInTimeQueryParams
	Headers     PostRestoreDbInstanceToPointInTimeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRestoreDbInstanceToPointInTimeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
