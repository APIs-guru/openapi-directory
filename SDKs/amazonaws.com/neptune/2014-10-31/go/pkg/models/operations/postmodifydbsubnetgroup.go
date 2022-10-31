package operations

type PostModifyDbSubnetGroupActionEnum string

const (
	PostModifyDbSubnetGroupActionEnumModifyDbSubnetGroup PostModifyDbSubnetGroupActionEnum = "ModifyDBSubnetGroup"
)

type PostModifyDbSubnetGroupVersionEnum string

const (
	PostModifyDbSubnetGroupVersionEnumTwoThousandAndFourteen1031 PostModifyDbSubnetGroupVersionEnum = "2014-10-31"
)

type PostModifyDbSubnetGroupQueryParams struct {
	Action  PostModifyDbSubnetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyDbSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyDbSubnetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
