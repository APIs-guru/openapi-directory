package operations

type PostStopDbInstanceActionEnum string

const (
	PostStopDbInstanceActionEnumStopDbInstance PostStopDbInstanceActionEnum = "StopDBInstance"
)

type PostStopDbInstanceVersionEnum string

const (
	PostStopDbInstanceVersionEnumTwoThousandAndFourteen1031 PostStopDbInstanceVersionEnum = "2014-10-31"
)

type PostStopDbInstanceQueryParams struct {
	Action  PostStopDbInstanceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostStopDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostStopDbInstanceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostStopDbInstanceRequest struct {
	QueryParams PostStopDbInstanceQueryParams
	Headers     PostStopDbInstanceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostStopDbInstanceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
