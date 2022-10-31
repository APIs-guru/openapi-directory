package operations

type PostStartDbInstanceActionEnum string

const (
	PostStartDbInstanceActionEnumStartDbInstance PostStartDbInstanceActionEnum = "StartDBInstance"
)

type PostStartDbInstanceVersionEnum string

const (
	PostStartDbInstanceVersionEnumTwoThousandAndFourteen1031 PostStartDbInstanceVersionEnum = "2014-10-31"
)

type PostStartDbInstanceQueryParams struct {
	Action  PostStartDbInstanceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostStartDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostStartDbInstanceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostStartDbInstanceRequest struct {
	QueryParams PostStartDbInstanceQueryParams
	Headers     PostStartDbInstanceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostStartDbInstanceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
