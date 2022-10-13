package operations

type PostRebootDbInstanceActionEnum string

const (
	PostRebootDbInstanceActionEnumRebootDbInstance PostRebootDbInstanceActionEnum = "RebootDBInstance"
)

type PostRebootDbInstanceVersionEnum string

const (
	PostRebootDbInstanceVersionEnumTwoThousandAndThirteen0212 PostRebootDbInstanceVersionEnum = "2013-02-12"
)

type PostRebootDbInstanceQueryParams struct {
	Action  PostRebootDbInstanceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRebootDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRebootDbInstanceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRebootDbInstanceRequest struct {
	QueryParams PostRebootDbInstanceQueryParams
	Headers     PostRebootDbInstanceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRebootDbInstanceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
