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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
