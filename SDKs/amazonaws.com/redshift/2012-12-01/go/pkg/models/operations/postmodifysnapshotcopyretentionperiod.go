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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
