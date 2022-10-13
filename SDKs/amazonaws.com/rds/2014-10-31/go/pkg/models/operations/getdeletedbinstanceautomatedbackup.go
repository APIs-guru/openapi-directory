package operations

type GetDeleteDbInstanceAutomatedBackupActionEnum string

const (
	GetDeleteDbInstanceAutomatedBackupActionEnumDeleteDbInstanceAutomatedBackup GetDeleteDbInstanceAutomatedBackupActionEnum = "DeleteDBInstanceAutomatedBackup"
)

type GetDeleteDbInstanceAutomatedBackupVersionEnum string

const (
	GetDeleteDbInstanceAutomatedBackupVersionEnumTwoThousandAndFourteen1031 GetDeleteDbInstanceAutomatedBackupVersionEnum = "2014-10-31"
)

type GetDeleteDbInstanceAutomatedBackupQueryParams struct {
	Action                        GetDeleteDbInstanceAutomatedBackupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbInstanceAutomatedBackupsArn *string                                       `queryParam:"style=form,explode=true,name=DBInstanceAutomatedBackupsArn"`
	DbiResourceID                 *string                                       `queryParam:"style=form,explode=true,name=DbiResourceId"`
	Version                       GetDeleteDbInstanceAutomatedBackupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteDbInstanceAutomatedBackupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteDbInstanceAutomatedBackupRequest struct {
	QueryParams GetDeleteDbInstanceAutomatedBackupQueryParams
	Headers     GetDeleteDbInstanceAutomatedBackupHeaders
}

type GetDeleteDbInstanceAutomatedBackupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
