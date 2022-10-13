package operations

type PostDeleteDbInstanceActionEnum string

const (
	PostDeleteDbInstanceActionEnumDeleteDbInstance PostDeleteDbInstanceActionEnum = "DeleteDBInstance"
)

type PostDeleteDbInstanceVersionEnum string

const (
	PostDeleteDbInstanceVersionEnumTwoThousandAndThirteen0212 PostDeleteDbInstanceVersionEnum = "2013-02-12"
)

type PostDeleteDbInstanceQueryParams struct {
	Action  PostDeleteDbInstanceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteDbInstanceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteDbInstanceRequest struct {
	QueryParams PostDeleteDbInstanceQueryParams
	Headers     PostDeleteDbInstanceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteDbInstanceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
