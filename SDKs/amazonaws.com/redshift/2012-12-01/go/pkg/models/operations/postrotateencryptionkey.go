package operations

type PostRotateEncryptionKeyActionEnum string

const (
	PostRotateEncryptionKeyActionEnumRotateEncryptionKey PostRotateEncryptionKeyActionEnum = "RotateEncryptionKey"
)

type PostRotateEncryptionKeyVersionEnum string

const (
	PostRotateEncryptionKeyVersionEnumTwoThousandAndTwelve1201 PostRotateEncryptionKeyVersionEnum = "2012-12-01"
)

type PostRotateEncryptionKeyQueryParams struct {
	Action  PostRotateEncryptionKeyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRotateEncryptionKeyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRotateEncryptionKeyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostRotateEncryptionKeyRequest struct {
	QueryParams PostRotateEncryptionKeyQueryParams
	Headers     PostRotateEncryptionKeyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRotateEncryptionKeyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
