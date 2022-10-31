package operations

type PostModifyDbInstanceActionEnum string

const (
	PostModifyDbInstanceActionEnumModifyDbInstance PostModifyDbInstanceActionEnum = "ModifyDBInstance"
)

type PostModifyDbInstanceVersionEnum string

const (
	PostModifyDbInstanceVersionEnumTwoThousandAndThirteen0212 PostModifyDbInstanceVersionEnum = "2013-02-12"
)

type PostModifyDbInstanceQueryParams struct {
	Action  PostModifyDbInstanceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyDbInstanceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyDbInstanceRequest struct {
	QueryParams PostModifyDbInstanceQueryParams
	Headers     PostModifyDbInstanceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyDbInstanceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
