package operations

type PostDeleteDbInstanceAutomatedBackupActionEnum string

const (
	PostDeleteDbInstanceAutomatedBackupActionEnumDeleteDbInstanceAutomatedBackup PostDeleteDbInstanceAutomatedBackupActionEnum = "DeleteDBInstanceAutomatedBackup"
)

type PostDeleteDbInstanceAutomatedBackupVersionEnum string

const (
	PostDeleteDbInstanceAutomatedBackupVersionEnumTwoThousandAndFourteen1031 PostDeleteDbInstanceAutomatedBackupVersionEnum = "2014-10-31"
)

type PostDeleteDbInstanceAutomatedBackupQueryParams struct {
	Action  PostDeleteDbInstanceAutomatedBackupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteDbInstanceAutomatedBackupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteDbInstanceAutomatedBackupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteDbInstanceAutomatedBackupRequest struct {
	QueryParams PostDeleteDbInstanceAutomatedBackupQueryParams
	Headers     PostDeleteDbInstanceAutomatedBackupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteDbInstanceAutomatedBackupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
