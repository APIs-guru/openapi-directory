package operations

type PostModifySnapshotCopyRetentionPeriodActionEnum string

const (
	PostModifySnapshotCopyRetentionPeriodActionEnumModifySnapshotCopyRetentionPeriod PostModifySnapshotCopyRetentionPeriodActionEnum = "ModifySnapshotCopyRetentionPeriod"
)

type PostModifySnapshotCopyRetentionPeriodVersionEnum string

const (
	PostModifySnapshotCopyRetentionPeriodVersionEnumTwoThousandAndTwelve1201 PostModifySnapshotCopyRetentionPeriodVersionEnum = "2012-12-01"
)

type PostModifySnapshotCopyRetentionPeriodQueryParams struct {
	Action  PostModifySnapshotCopyRetentionPeriodActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifySnapshotCopyRetentionPeriodVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifySnapshotCopyRetentionPeriodHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifySnapshotCopyRetentionPeriodRequest struct {
	QueryParams PostModifySnapshotCopyRetentionPeriodQueryParams
	Headers     PostModifySnapshotCopyRetentionPeriodHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifySnapshotCopyRetentionPeriodResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
