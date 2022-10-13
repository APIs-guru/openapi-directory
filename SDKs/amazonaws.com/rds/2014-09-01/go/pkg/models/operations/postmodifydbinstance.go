package operations

type PostModifyDbInstanceActionEnum string

const (
	PostModifyDbInstanceActionEnumModifyDbInstance PostModifyDbInstanceActionEnum = "ModifyDBInstance"
)

type PostModifyDbInstanceVersionEnum string

const (
	PostModifyDbInstanceVersionEnumTwoThousandAndFourteen0901 PostModifyDbInstanceVersionEnum = "2014-09-01"
)

type PostModifyDbInstanceQueryParams struct {
	Action  PostModifyDbInstanceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyDbInstanceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
