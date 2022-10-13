package operations

type PostStopDbInstanceAutomatedBackupsReplicationActionEnum string

const (
	PostStopDbInstanceAutomatedBackupsReplicationActionEnumStopDbInstanceAutomatedBackupsReplication PostStopDbInstanceAutomatedBackupsReplicationActionEnum = "StopDBInstanceAutomatedBackupsReplication"
)

type PostStopDbInstanceAutomatedBackupsReplicationVersionEnum string

const (
	PostStopDbInstanceAutomatedBackupsReplicationVersionEnumTwoThousandAndFourteen1031 PostStopDbInstanceAutomatedBackupsReplicationVersionEnum = "2014-10-31"
)

type PostStopDbInstanceAutomatedBackupsReplicationQueryParams struct {
	Action  PostStopDbInstanceAutomatedBackupsReplicationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostStopDbInstanceAutomatedBackupsReplicationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostStopDbInstanceAutomatedBackupsReplicationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostStopDbInstanceAutomatedBackupsReplicationRequest struct {
	QueryParams PostStopDbInstanceAutomatedBackupsReplicationQueryParams
	Headers     PostStopDbInstanceAutomatedBackupsReplicationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostStopDbInstanceAutomatedBackupsReplicationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
