package operations

type PostDeleteDbSubnetGroupActionEnum string

const (
	PostDeleteDbSubnetGroupActionEnumDeleteDbSubnetGroup PostDeleteDbSubnetGroupActionEnum = "DeleteDBSubnetGroup"
)

type PostDeleteDbSubnetGroupVersionEnum string

const (
	PostDeleteDbSubnetGroupVersionEnumTwoThousandAndFourteen0901 PostDeleteDbSubnetGroupVersionEnum = "2014-09-01"
)

type PostDeleteDbSubnetGroupQueryParams struct {
	Action  PostDeleteDbSubnetGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteDbSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteDbSubnetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteDbSubnetGroupRequest struct {
	QueryParams PostDeleteDbSubnetGroupQueryParams
	Headers     PostDeleteDbSubnetGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteDbSubnetGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
