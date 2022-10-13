package operations

type PostRestoreDbInstanceToPointInTimeActionEnum string

const (
	PostRestoreDbInstanceToPointInTimeActionEnumRestoreDbInstanceToPointInTime PostRestoreDbInstanceToPointInTimeActionEnum = "RestoreDBInstanceToPointInTime"
)

type PostRestoreDbInstanceToPointInTimeVersionEnum string

const (
	PostRestoreDbInstanceToPointInTimeVersionEnumTwoThousandAndFourteen1031 PostRestoreDbInstanceToPointInTimeVersionEnum = "2014-10-31"
)

type PostRestoreDbInstanceToPointInTimeQueryParams struct {
	Action  PostRestoreDbInstanceToPointInTimeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRestoreDbInstanceToPointInTimeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRestoreDbInstanceToPointInTimeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
