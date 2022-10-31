package operations

type PostStartDbInstanceAutomatedBackupsReplicationActionEnum string

const (
	PostStartDbInstanceAutomatedBackupsReplicationActionEnumStartDbInstanceAutomatedBackupsReplication PostStartDbInstanceAutomatedBackupsReplicationActionEnum = "StartDBInstanceAutomatedBackupsReplication"
)

type PostStartDbInstanceAutomatedBackupsReplicationVersionEnum string

const (
	PostStartDbInstanceAutomatedBackupsReplicationVersionEnumTwoThousandAndFourteen1031 PostStartDbInstanceAutomatedBackupsReplicationVersionEnum = "2014-10-31"
)

type PostStartDbInstanceAutomatedBackupsReplicationQueryParams struct {
	Action  PostStartDbInstanceAutomatedBackupsReplicationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostStartDbInstanceAutomatedBackupsReplicationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostStartDbInstanceAutomatedBackupsReplicationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostStartDbInstanceAutomatedBackupsReplicationRequest struct {
	QueryParams PostStartDbInstanceAutomatedBackupsReplicationQueryParams
	Headers     PostStartDbInstanceAutomatedBackupsReplicationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostStartDbInstanceAutomatedBackupsReplicationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
