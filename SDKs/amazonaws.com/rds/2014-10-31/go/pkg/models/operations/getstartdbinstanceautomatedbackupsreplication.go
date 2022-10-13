package operations

type GetStartDbInstanceAutomatedBackupsReplicationActionEnum string

const (
	GetStartDbInstanceAutomatedBackupsReplicationActionEnumStartDbInstanceAutomatedBackupsReplication GetStartDbInstanceAutomatedBackupsReplicationActionEnum = "StartDBInstanceAutomatedBackupsReplication"
)

type GetStartDbInstanceAutomatedBackupsReplicationVersionEnum string

const (
	GetStartDbInstanceAutomatedBackupsReplicationVersionEnumTwoThousandAndFourteen1031 GetStartDbInstanceAutomatedBackupsReplicationVersionEnum = "2014-10-31"
)

type GetStartDbInstanceAutomatedBackupsReplicationQueryParams struct {
	Action                GetStartDbInstanceAutomatedBackupsReplicationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	BackupRetentionPeriod *int64                                                   `queryParam:"style=form,explode=true,name=BackupRetentionPeriod"`
	KmsKeyID              *string                                                  `queryParam:"style=form,explode=true,name=KmsKeyId"`
	PreSignedURL          *string                                                  `queryParam:"style=form,explode=true,name=PreSignedUrl"`
	SourceDbInstanceArn   string                                                   `queryParam:"style=form,explode=true,name=SourceDBInstanceArn"`
	Version               GetStartDbInstanceAutomatedBackupsReplicationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetStartDbInstanceAutomatedBackupsReplicationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetStartDbInstanceAutomatedBackupsReplicationRequest struct {
	QueryParams GetStartDbInstanceAutomatedBackupsReplicationQueryParams
	Headers     GetStartDbInstanceAutomatedBackupsReplicationHeaders
}

type GetStartDbInstanceAutomatedBackupsReplicationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
