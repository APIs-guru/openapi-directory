package operations

type PostModifyDbSubnetGroupActionEnum string

const (
	PostModifyDbSubnetGroupActionEnumModifyDbSubnetGroup PostModifyDbSubnetGroupActionEnum = "ModifyDBSubnetGroup"
)

type PostModifyDbSubnetGroupVersionEnum string

const (
	PostModifyDbSubnetGroupVersionEnumTwoThousandAndThirteen0909 PostModifyDbSubnetGroupVersionEnum = "2013-09-09"
)

type PostModifyDbSubnetGroupQueryParams struct {
	Action  PostModifyDbSubnetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyDbSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyDbSubnetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyDbSubnetGroupRequest struct {
	QueryParams PostModifyDbSubnetGroupQueryParams
	Headers     PostModifyDbSubnetGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyDbSubnetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
