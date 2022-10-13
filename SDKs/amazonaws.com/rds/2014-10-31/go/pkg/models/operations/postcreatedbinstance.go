package operations

type PostCreateDbInstanceActionEnum string

const (
	PostCreateDbInstanceActionEnumCreateDbInstance PostCreateDbInstanceActionEnum = "CreateDBInstance"
)

type PostCreateDbInstanceVersionEnum string

const (
	PostCreateDbInstanceVersionEnumTwoThousandAndFourteen1031 PostCreateDbInstanceVersionEnum = "2014-10-31"
)

type PostCreateDbInstanceQueryParams struct {
	Action  PostCreateDbInstanceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateDbInstanceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateDbInstanceRequest struct {
	QueryParams PostCreateDbInstanceQueryParams
	Headers     PostCreateDbInstanceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateDbInstanceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
