package operations

type PostRestoreDbInstanceFromS3ActionEnum string

const (
	PostRestoreDbInstanceFromS3ActionEnumRestoreDbInstanceFromS3 PostRestoreDbInstanceFromS3ActionEnum = "RestoreDBInstanceFromS3"
)

type PostRestoreDbInstanceFromS3VersionEnum string

const (
	PostRestoreDbInstanceFromS3VersionEnumTwoThousandAndFourteen1031 PostRestoreDbInstanceFromS3VersionEnum = "2014-10-31"
)

type PostRestoreDbInstanceFromS3QueryParams struct {
	Action  PostRestoreDbInstanceFromS3ActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRestoreDbInstanceFromS3VersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRestoreDbInstanceFromS3Headers struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostRestoreDbInstanceFromS3Request struct {
	QueryParams PostRestoreDbInstanceFromS3QueryParams
	Headers     PostRestoreDbInstanceFromS3Headers
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRestoreDbInstanceFromS3Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
